import { OidcModuleOptions, OidcOptionsFactory, UserInfoMethod } from '@finastra/nestjs-oidc';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OidcConfigService implements OidcOptionsFactory {
  readonly logger = new Logger(OidcConfigService.name);

  constructor(private configService: ConfigService) {}

  createModuleConfig(): OidcModuleOptions {
    const issuer = this.configService.get('OIDC_ISSUER');
    const client_id = this.configService.get('OIDC_CLIENT_ID');
    const origin = this.configService.get('OIDC_ORIGIN');

    this.logger.log(`
issuer        : ${issuer}
client_id     : ${client_id}
origin        : ${origin}`);

    return {
      issuer: this.configService.get('OIDC_ISSUER'),
      clientMetadata: {
        client_id: this.configService.get('OIDC_CLIENT_ID'),
        client_secret: this.configService.get('OIDC_CLIENT_SECRET'),
      },
      authParams: {
        scope: this.configService.get('OIDC_SCOPE'),
        resource: this.configService.get('OIDC_RESOURCE'),
        nonce: 'true',
      },
      origin,
      userInfoMethod: UserInfoMethod.token,
      defaultHttpOptions: {
        timeout: 20000,
      },
    };
  }
}
