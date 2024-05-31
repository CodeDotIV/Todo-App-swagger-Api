import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
// import { TestInterceptor } from 'src/test.interceptor';
// @ApiTags('login')
@Controller('login')
export class LoginController {
    
    @Get()
    login(): string {
        return 'Logged in...'
    } 
}
