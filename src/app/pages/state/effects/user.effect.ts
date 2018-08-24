import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import {
  UserActionTypes, UpdateUser, UserError, UpdateUserSuccess, VerifyUserSuccess
} from '../actions';
import { UserService } from '../../../services/user.service';

@Injectable()
export class UserEffect {

  @Effect()
  updateUser: Observable<Action> = this.actions$.ofType<UpdateUser>(UserActionTypes.UPDATE_USER)
    .pipe(
      mergeMap((action) =>
        this.userService.updateUser(action.payload)
          .pipe(
            map((data: any) => {
              return new VerifyUserSuccess(data);
            }),
            catchError((err) => {
              err.type = UserActionTypes.UPDATE_USER;
              return of(new UserError(err));
            })
          )
      )
    );

  constructor(private actions$: Actions, private userService: UserService) {}
}
