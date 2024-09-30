import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from 'express';
export declare class AuthService {
    private jwt;
    private userService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    constructor(jwt: JwtService, userService: UserService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: any;
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: any;
    }>;
    private issueTokens;
    private validateUser;
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenFromResponse(res: Response): void;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: any;
    }>;
}
