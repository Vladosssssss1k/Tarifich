"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const jwt_guards_1 = require("../guards/jwt.guards");
const Auth = () => (0, common_1.UseGuards)(jwt_guards_1.JwtAuthGuard);
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map