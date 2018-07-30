import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { authStateSelector } from '../pages/state/selectors';
import { AppStateI } from '../pages/state';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AppStateI>,
    private authService: AuthService,
    private location: Location
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.authService.setPreviousURL = this.location.path();

    if (!localStorage.token) {
      this.router.navigate(['/']);
      return false;
    }

    return this.store.select(authStateSelector)
      .pipe(map((authState) => {

        if (authState.userDetails) {
          return true;
        }

        this.router.navigate(['/']);
        return false;
      }));
  }
}
