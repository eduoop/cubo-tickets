import { Module } from '@nestjs/common';
import { ConfigModule, ConfigModule as ConfigModuleNest } from "@nestjs/config"
import { envSchema } from './env/env';
import { EnvModule } from './env/env.module';
import { PrismaModule } from './shared/database/prisma.module';

@Module({
  imports: [ConfigModuleNest.forRoot({
    validate: (env) => envSchema.parse(env),
    isGlobal: true,
  }),
    EnvModule,
  ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
