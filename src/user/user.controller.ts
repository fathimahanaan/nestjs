import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
   
    @Get()
    getUser(@Query('name') name: string) {
        return this.userService.findAllUsers(name);
    }
}
