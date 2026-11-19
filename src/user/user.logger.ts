import {Injectable} from '@nestjs/common';

// this helps to log messages in the console
@Injectable()
export class LoggerService {
log(message: string) {
    console.log('[LOG]', message);
    }}