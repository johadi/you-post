import { groupReducer } from './group.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { GroupFeatureStateI } from '../';

export const groupFeatureReducers: ActionReducerMap<GroupFeatureStateI> = {
  groupState: groupReducer
};
