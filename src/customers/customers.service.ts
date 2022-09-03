import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Dilan',
      age: 30,
    },
    {
      id: 13,
      name: 'Bob',
      age: 27,
    },
    {
      id: 25,
      name: 'Alice',
      age: 18,
    },
  ];

  findOne(id: string) {
    const customer = this.customers.find(
      (customer) => customer.id === Number(id),
    );
    if (!customer) {
      return new NotFoundException(`Customer with #${id} id not found`);
    }
    return customer;
  }
}
