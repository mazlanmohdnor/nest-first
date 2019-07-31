import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
    
    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }
    
    async  create(contact: User): Promise<User> {
        return await this.usersRepository.save(contact);
    }
    
    async getUser(_userId: string): Promise<User[]> {
        let a = await this.usersRepository.find({
            select: ['fullName', 'email', 'userId'],
            where: [{ 'userId': _userId }]
        });
        
        console.log('a :', a);
        return a;
    }
    
    async updateUser(user: User) {
        this.usersRepository.save(user);
    }
    
    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}
