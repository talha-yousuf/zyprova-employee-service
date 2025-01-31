import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hr } from './employees.entity';
import { EmployeePerDepartmentDTO } from './employees.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Hr)
    private readonly employeeRepository: Repository<Hr>,
  ) {}

  async getEmployees(): Promise<EmployeePerDepartmentDTO[]> {
    const rawQuery = `    
      SELECT
        DEPARTMENT,
        COUNT(*) AS NUM_EMPLOYEES
      FROM
        HR
      WHERE
        EMPLOYMENT_STATUS = 'Active'
      GROUP BY
        DEPARTMENT`;

    const result = (await this.employeeRepository.query(
      rawQuery,
    )) as EmployeePerDepartmentDTO[];

    return result;
  }
}
