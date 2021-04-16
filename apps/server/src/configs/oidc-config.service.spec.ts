import { createMock } from '@golevelup/nestjs-testing';
import { ConfigService } from '@nestjs/config';
import { OidcConfigService } from './oidc-config.service';

describe('OidcConfigService', () => {
  let service: OidcConfigService;

  beforeEach(() => {
    service = new OidcConfigService(createMock<ConfigService>());
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('createModuleConfig', () => {
    it('should return config', () => {
      jest.spyOn(service['configService'], 'get').mockReturnValue('');
      const spy = jest.spyOn(service.logger, 'log').mockImplementation(() => {});
      service.createModuleConfig();
      expect(spy).toHaveBeenCalled();
    });
  });
});
