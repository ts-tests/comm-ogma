import {
  Command,
  CommandRunner,
  InjectCommander,
  Option,
} from 'nest-commander';
import { Command as cmd } from 'commander';
import validator from 'validator';
import { OgmaLogger, OgmaService } from '@ogma/nestjs-module';

@Command({
  name: 'plc',
  options: { isDefault: false },
})
export class PlcCommand extends CommandRunner {
  constructor(
    @InjectCommander() private readonly commander: cmd,
    @OgmaLogger(PlcCommand.name) private readonly logger: OgmaService,
  ) {
    super();
  }

  @Option({
    flags: '-i, --ip <string>',
    name: 'ip',
    required: true,
  })
  parseIp(value: string): string {
    if (validator.isIP(value, 4)) {
      return value;
    } else {
      this.logger.info('this does not work');
      this.commander.error(`'${value}' is not a valid IP address.`, {
        exitCode: 2,
        code: 'plc.parseIp',
      });
    }
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    console.log({ inputs, options });
  }
}
