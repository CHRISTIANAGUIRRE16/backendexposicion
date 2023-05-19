import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', //comando para mostrar el host -- psql -h
      port: 5432,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'tu_base_de_datos',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
