import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "src/prisma.service"
import { AuthDto } from 'src/auth/dto/auth.dto';
import { hash } from 'argon2';


@Injectable()
export class UserService {
  constructor(private prisma:PrismaService){}

  getById(id:string){
    return this.prisma.user.findUnique({
      where:{
        id,
      },
      includes:{
        tariff:true
      }
    })
  }

  getByEmail(email: string){
    return this.prisma.user.findUnique({
      where:{
        email,
      },
    })
  }

  async create(dto:AuthDto){
    const user={
      email:dto.email,
      name:" ",
      password:await hash(dto.password),
    }

    return this.prisma.user.create({
      data:user,
    })
  }
}
