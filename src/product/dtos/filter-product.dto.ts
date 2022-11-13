import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterProductDTO {
  @ApiPropertyOptional()
  search?: string;
  @ApiPropertyOptional()
  category?: string;
}
