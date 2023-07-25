import { NestFactory } from '@nestjs/core';
import { readFileSync } from 'fs';
import { AppModule } from './app.module';
import { join } from 'path';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: readFileSync(join(__dirname, '..', 'key.pem')),
      cert: readFileSync(join(__dirname, '..', 'cert.pem')),
    },
  });
  app.use(helmet());
  await app.listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}...`),
  );
}
bootstrap();
