import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hr')
export class Hr {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: false })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'int', nullable: false })
  employee_number: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  requisition: string;

  @Column({ type: 'uuid', nullable: false })
  business_id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  middle_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  last_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  company_email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  private_email: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  gender: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  sexual_orientation: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  department_head: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  manager_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  department: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  country: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  state: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  city: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  employment_status: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  employment_type: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  comp_region: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  comp_currency: string;

  @Column({ type: 'boolean', nullable: false })
  people_manager: boolean;

  @Column({ type: 'decimal', nullable: false })
  base_salary: number;

  @Column({ type: 'decimal', nullable: true })
  one_time_bonus: number;

  @Column({ type: 'decimal', nullable: true })
  equity: number;

  @Column({ type: 'decimal', nullable: true })
  equity_recommended: number;

  @Column({ type: 'timestamp', nullable: true })
  start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  last_date: Date;
}
