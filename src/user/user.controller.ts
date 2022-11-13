import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './schemas/user.schema';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: 'This Api will create a User for this App' })
  @Post('create-user')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userService.addUser(createUserDto);
    } catch (error) {}
  }
  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    try {
      return await this.getUser(id);
    } catch (error) {}
  }
}
