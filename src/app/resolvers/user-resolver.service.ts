import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(private authService: AuthService, private router: Router) { }

  resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot) {
    return this.authService.verifyUser()
      .catch((error) => {
        this.router.navigate(['/']);
        return Observable.throw(error);
      });
  }

}
