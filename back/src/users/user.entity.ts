import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  // @ObjectIdColumn()
  // id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;



  // @OneToOne(() => Sac, (sac) => sac.user, {cascade: true})
  // @JoinColumn()
  // sac: Sac;

  @Column('boolean', { default: false })
  isAdmin = false;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;
}
