import { createMock } from '@golevelup/nestjs-testing';
import { ConfigService } from '@nestjs/config';
import { ProxyConfigService } from './proxy-config.service';

describe('ProxyConfigService', () => {
  let service: ProxyConfigService;

  beforeEach(() => {
    service = new ProxyConfigService(createMock<ConfigService>());
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('createModuleConfig', () => {
    it('should return config', () => {
      const spy = jest.spyOn(service.logger, 'log').mockReturnValue();
      service.createModuleConfig();
      expect(spy).toHaveBeenCalled();
    });
  });
});
