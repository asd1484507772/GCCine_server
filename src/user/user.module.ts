import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // 如果需要的话，导入其他相关模块，例如AuthModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 导出UserService，以便其他模块（如AuthModule）可以使用它
})
export class UserModule {}
