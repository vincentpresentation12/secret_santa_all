import { Draw } from 'src/draw/draw.entity';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class SecretSanta extends BaseEntity {
    // @ObjectIdColumn()
    // id: ObjectID;
  
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
  
    @OneToMany(() => Draw, (draw) => draw.secretSanta)
    draws: Draw[];
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt?: Date;
    newSecretSanta: Promise<Draw[]>;
  }
  