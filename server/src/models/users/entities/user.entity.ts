import { Role } from 'src/models/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'phone', nullable: true })
  phone: string;

  @Column({ name: 'name_first', nullable: true })
  nameFirst: string;

  @Column({ name: 'name_last', nullable: true })
  nameLast: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Role, {
    cascade: true,
    //  Для отображения ролей вместе с пользователем
    eager: true,
  })
  @JoinTable({ name: 'user_roles' })
  roles: Role[];
}
