import { NestFactory } from '@nestjs/core';
import { readFileSync } from 'fs';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: readFileSync(join(__dirname, '..', 'key.pem')),
      cert: readFileSync(join(__dirname, '..', 'cert.pem')),
    },
  });

  await app.listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}...`),
  );
}
bootstrap();
