import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }
    
    @Get()
    getAll() {
        console.log('getall');
        return this.service.findAll();
    }
    
    @Post('create')
    async create(@Body() user: User): Promise<User> {
        console.log('user :', user);
        return this.service.create(user);
    }
    
    @Get(':id')
    get(@Param() params) {
        console.log(params);
        return this.service.getUser(params.id);
    }
    
    

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    // @Delete(':id')
    // deleteUser(@Param() params) {
    //     return this.service.deleteUser(params.id);
    // }
}
