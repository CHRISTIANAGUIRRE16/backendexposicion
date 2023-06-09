import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(data: any) {
    const user = this.userRepository.create(data);
    await this.userRepository.save(user);
    return { message: 'Registro exitoso' };
  }
}
