import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(private authService: AuthService, private router: Router) { }

  resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot) {
    // Example of resolver
    // return this.authService.verifyUser()
    //   .pipe(catchError((error) => {
    //     this.router.navigate(['/']);
    //     return throwError(error);
    //   }));
  }

}
