import { LoggerModule } from '@finastra/nestjs-logger';
import { ProxyModule } from '@finastra/nestjs-proxy';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ProxyConfigService } from '../configs/proxy-config.service';
import { appFolder, ServeStaticConfigService } from '../configs/serve-static-config.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    /* OidcModule.forRootAsync({
      imports: [ConfigModule],
      useClass: OidcConfigService,
    }), */
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticConfigService,
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/static',
      rootPath: appFolder,
    }),
    ProxyModule.forRootAsync({
      useClass: ProxyConfigService,
      imports: [ConfigModule],
    }),
    HealthModule,
    LoggerModule,
  ],
})
export class AppModule {}
