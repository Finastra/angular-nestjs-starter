import { CATS_API_PROXY_TOKEN } from '@finastra/api-interfaces';
import { ProxyModuleOptions, ProxyModuleOptionsFactory, Service } from '@finastra/nestjs-proxy';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// Documentation for the proxy module can be founde here:
// https://github.com/Finastra/finastra-nodejs-libs/blob/develop/libs/proxy/README.md

@Injectable()
export class ProxyConfigService implements ProxyModuleOptionsFactory {
  readonly logger = new Logger(ProxyConfigService.name);

  constructor(private configService: ConfigService) {}

  createModuleConfig(): ProxyModuleOptions {
    const FFDC = this.configService.get('FFDC');
    const CATS_API_KEY = this.configService.get('CATS_API_KEY');

    const services = [
      {
        id: CATS_API_PROXY_TOKEN,
        url: 'https://api.thecatapi.com/v1',
        forwardToken: false,
        config: {
          headers: {
            ...(CATS_API_KEY && { 'x-api-key': CATS_API_KEY }),
          },
        },
      },
      /* {
        id: 'ACCOUNT_INFORMATION_US',
        url: `${FFDC}/retail-us/me/account/v1/accounts`,
        config: {}
      } */
    ] as Service[];

    if (!CATS_API_KEY) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }

    this.logger.log(services);

    return {
      services,
      allowedCookies: [],
    };
  }
}
