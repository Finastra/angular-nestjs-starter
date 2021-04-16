import { ServeStaticConfigService } from './serve-static-config.service';

describe('ServeStaticConfigService', () => {
  let service: ServeStaticConfigService;

  beforeEach(() => {
    service = new ServeStaticConfigService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('createLoggerOptions', () => {
    it('should return config', () => {
      expect(typeof service.createLoggerOptions()[0].rootPath === 'string').toBeTruthy();
    });
  });
});
