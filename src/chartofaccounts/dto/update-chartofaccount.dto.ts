import { PartialType } from '@nestjs/swagger';
import { CreateChartOfAccountDto } from './create-chartofaccount.dto';

export class UpdateChartofaccountDto extends PartialType(
  CreateChartOfAccountDto,
) {}
