import { Action } from '@ngrx/store';

export enum UserActionTypes {
  UPDATE_USER = '[user] update user profile',
  UPDATE_USER_SUCCESS = '[user] update user profile success',
  ERROR = '[user] user related errors',
  CLEAR_ERROR = '[user] clear user related errors',
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UPDATE_USER;

  constructor(public payload: any) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_USER_SUCCESS;

  constructor(public payload: any) {}
}

export class UserError implements Action {
  readonly type = UserActionTypes.ERROR;

  constructor(public payload: any) {
  }
}

export class ClearUserError implements Action {
  readonly type = UserActionTypes.CLEAR_ERROR;
}

export type UserActionUnions = UpdateUser
  | UpdateUserSuccess
  | UserError
  | ClearUserError;
