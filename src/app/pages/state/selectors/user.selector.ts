import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GroupFeatureStateI } from '../';

const groupFeatureSelector = createFeatureSelector<GroupFeatureStateI>('group');

export const userStateSelector = createSelector(groupFeatureSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.userState;
});

export const userErrorSelector = createSelector(groupFeatureSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.userState.error;
});
