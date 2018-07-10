import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService: AuthService;

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    this.authService = this.injector.get(AuthService);
    const authToken = this.authService.getAuthorizationToken();

    const authReq = req.clone({ setHeaders: { 'x-auth': authToken } });

    // Another method
    // const authReq = req.clone({
    //   headers: req.headers.set('x-auth', authToken)
    // });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
