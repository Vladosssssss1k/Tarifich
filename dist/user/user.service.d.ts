import { PrismaService } from "src/prisma.service";
import { AuthDto } from 'src/auth/dto/auth.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): any;
    getByEmail(email: string): any;
    create(dto: AuthDto): Promise<any>;
}
