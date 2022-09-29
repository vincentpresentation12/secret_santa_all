import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { SecretSanta } from '../secret_santas/secret-santa.entity';

  @Entity()
  export class Draw extends BaseEntity {
    // @ObjectIdColumn()
    // id: ObjectID;
  
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    santa: string;

    @Column()
    giftee: string;

    @ManyToOne(() => SecretSanta, (secretSanta) => secretSanta.draws)
    secretSanta: SecretSanta;
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt?: Date;
  }
  