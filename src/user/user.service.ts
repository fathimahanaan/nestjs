import { Injectable, NotFoundException } from '@nestjs/common';
import { LoggerService } from './user.logger.js';
import { CreateUserDto } from './dto/create-user.dto.js';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}

  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  // Get all users
  findAllUsers(name: string = '') {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  // Find one user
  findOneUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    return user;
  }

  // Create a new user
createUser(dto: CreateUserDto) {
  this.logger.log(`Creating user with name: ${dto.name}`);

  const newUser: User = {
    id: this.users.length + 1,
    ...dto,
  };

  this.users.push(newUser);
  return newUser;
}

  // Update an existing user
  updateUser(id: number, dto: CreateUserDto) {
    this.logger.log(`Updating user with id: ${id}`);

    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    this.users[userIndex] = { ...this.users[userIndex], ...dto };
    return this.users[userIndex];
  }

  deleteUser(id: number) {
    this.logger.log(`Deleting user with id: ${id}`);
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const [deleted] = this.users.splice(userIndex, 1);
    return deleted;
  }
}
