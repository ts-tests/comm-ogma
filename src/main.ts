import { OgmaService } from '@ogma/nestjs-module';
import { CommandFactory } from 'nest-commander';

import { CliModule } from './cli/cli.module';

async function bootstrap(): Promise<void> {
  const app = await CommandFactory.createWithoutRunning(CliModule);
  app.useLogger(app.get(OgmaService));
  await CommandFactory.runApplication(app);
}

bootstrap().catch((e) => console.log(e));
