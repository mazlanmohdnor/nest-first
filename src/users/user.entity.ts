import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'txn_user' })
export class User {
    @PrimaryGeneratedColumn()
    userId: number;
    
    @Column('varchar', { length: 200 })
    fullName: string;
    
    @Column('varchar', { length: 200 })
    email: string;
}
