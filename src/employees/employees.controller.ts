import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('employee-per-department')
  async getAllEmployees() {
    return this.employeesService.getEmployees();
  }
}
