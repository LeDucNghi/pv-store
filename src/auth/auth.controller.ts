import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiParam } from '@nestjs/swagger';
import { SignInPayload, SignUpPayload } from 'src/dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiParam({
    name: 'username',
    required: true,
    description: 'Enter your username',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  signIn(@Body() signInDto: SignInPayload) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  @ApiParam({
    name: 'username',
    required: true,
    description: 'Enter your username',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  signUp(@Body() signUpDto: SignUpPayload) {
    return this.authService.signUp(signUpDto);
  }
}
