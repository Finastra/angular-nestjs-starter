import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let app: TestingModule;
  let controller;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();
    controller = app.get<HealthController>('HealthController');
  });

  describe('getHello', () => {
    it('should return true', () => {
      expect(controller.healthCheck()).toBe(true);
    });
  });
});
