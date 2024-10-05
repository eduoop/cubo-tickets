import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvService } from './env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const envService = app.get(EnvService);

  const port = envService.get('PORT');

  const config = new DocumentBuilder()
    .setTitle('Cubo Tickets')
    .setDescription('Api de gerenciamento de atendimentos, simulando a interação com tickets de suporte via WhatsApp')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
