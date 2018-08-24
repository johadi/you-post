import { groupReducer } from './group.reducer';
import { authReducer } from './auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { GroupFeatureStateI } from '../';
import {userReducer} from './user.reducer';

export const groupFeatureReducers: ActionReducerMap<GroupFeatureStateI> = {
  groupState: groupReducer,
  authState: authReducer,
  userState: userReducer,
};
