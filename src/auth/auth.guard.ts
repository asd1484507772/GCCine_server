import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request: any): Promise<boolean> {
    const { headers } = request;
    const { authorization } = headers;

    if (!authorization) {
      throw new UnauthorizedException();
    }

    const token = authorization.split(' ')[1]; // Assuming the token follows the 'Bearer TOKEN' format
    const decodedToken = this.userService.verifyToken(token);

    if (!decodedToken) {
      throw new UnauthorizedException();
    }

    // Add user to the request object so it can be used in the controllers
    request.user = await this.userService.findUserById(decodedToken.userId);
    return true;
  }
}
