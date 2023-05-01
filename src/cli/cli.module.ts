import { Module } from '@nestjs/common';
import { OgmaModule } from '@ogma/nestjs-module';

import { PlcCommand } from './command/plc.command';

@Module({
  imports: [
    OgmaModule.forRoot({
      service: {
        application: 'cli',
        color: true,
        each: true,
        json: false,
        logLevel: 'DEBUG'
      },
    }),
    OgmaModule.forFeatures([PlcCommand.name]),
    PlcCommand,
  ]
})
export class CliModule {}
