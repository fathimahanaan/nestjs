import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser(@Query('name') name: string) {
        return [
        {id: 1, name: 'John Doe', email: 'john.doe@example.com'},
            {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com'},
];
    }
}
