import { Injectable } from '@nestjs/common';
import { LoggerService } from './user.logger.js';

interface User {
  id: number;
  name: string;
  email: string;
}
@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}
  private users: User[] = [];

  findAllUsers(name: string = '') {
    return this.users.filter((user) =>
      user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
    );
  }
}


//user controller needs user service
//user service needs LoggerService
//Nest creates and connects everything.