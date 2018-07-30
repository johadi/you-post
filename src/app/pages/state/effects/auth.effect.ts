import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import {
  AuthActionTypes, SignUp, SignUpSuccess, SignIn, SignInSuccess, VerifyUser, VerifyUserSuccess, AuthError
} from '../actions';
import { AuthService } from '../../../services/auth.service';

@Injectable()
export class AuthEffect {

  @Effect()
  signUp: Observable<Action> = this.actions$.ofType<SignUp>(AuthActionTypes.SIGN_UP)
    .pipe(
      mergeMap((action) =>
        this.authService.signup(action.payload)
          .pipe(
            map((data: string) => {
              localStorage.setItem('token', data);
              return new SignUpSuccess(data);
            }),
            catchError((err) => {
              err.type = AuthActionTypes.SIGN_UP;
              return of(new AuthError(err));
            })
          )
      )
    );

  @Effect()
  signIn: Observable<Action> = this.actions$.ofType<SignIn>(AuthActionTypes.SIGN_IN)
    .pipe(
      mergeMap((action) =>
        this.authService.signin(action.payload)
          .pipe(
            map((data: string) => {
              localStorage.setItem('token', data);
              return new SignInSuccess(data);
            }),
            catchError((err) => {
              err.type = AuthActionTypes.SIGN_IN;
              return of(new AuthError(err));
            })
          )
      )
    );

  @Effect()
  verifyUser: Observable<Action> = this.actions$.ofType<VerifyUser>(AuthActionTypes.VERIFY_USER)
    .pipe(
      mergeMap(() =>
        this.authService.verifyUser()
          .pipe(
            map((data: any) => {
              return new VerifyUserSuccess(data);
            }),
            catchError((err) => {
              err.type = AuthActionTypes.VERIFY_USER;
              return of(new AuthError(err));
            })
          )
      )
    );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
