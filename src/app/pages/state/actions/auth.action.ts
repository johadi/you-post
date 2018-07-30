import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SIGN_UP = '[auth] sign up user',
  SIGN_UP_SUCCESS = '[auth] sign up user success',
  SIGN_IN = '[auth] sign in user',
  SIGN_IN_SUCCESS = '[auth] sign in user success',
  VERIFY_USER = '[auth] verify user',
  VERIFY_USER_SUCCESS = '[auth] verify user success',
  LOGOUT = '[auth] logout user',
  ERROR = '[auth] auth related errors',
  CLEAR_ERROR = '[auth] clear auth related errors',
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGN_UP;

  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_UP_SUCCESS;

  constructor(public payload: any) {}
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SIGN_IN;

  constructor(public payload: any) {}
}

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_IN_SUCCESS;

  constructor(public payload: any) {}
}

export class VerifyUser implements Action {
  readonly type = AuthActionTypes.VERIFY_USER;
}

export class VerifyUserSuccess implements Action {
  readonly type = AuthActionTypes.VERIFY_USER_SUCCESS;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}


export class AuthError implements Action {
  readonly type = AuthActionTypes.ERROR;

  constructor(public payload: any) {
  }
}

export class ClearAuthError implements Action {
  readonly type = AuthActionTypes.CLEAR_ERROR;
}

export type AuthActionUnions = SignUp
  | SignUpSuccess
  | SignIn
  | SignInSuccess
  | VerifyUser
  | VerifyUserSuccess
  | Logout
  | AuthError
  | ClearAuthError;
