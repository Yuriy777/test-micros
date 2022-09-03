import { Controller, Get, Param } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }
}
