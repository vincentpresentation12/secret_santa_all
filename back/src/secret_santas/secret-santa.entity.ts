import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class SecretSanta extends BaseEntity {
    // @ObjectIdColumn()
    // id: ObjectID;
  
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
  
    @Column()
    draw: string[];
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt?: Date;
  }
  