import { Test } from '@nestjs/testing';
import { HealthModule } from './health.module';

describe('Health Module', () => {
  let app: any;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [HealthModule],
    }).compile();
  });

  it('should be importable', async () => {
    expect(app).toBeTruthy();
  });
});
