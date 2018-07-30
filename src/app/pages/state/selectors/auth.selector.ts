import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GroupFeatureStateI } from '../';

const groupFeatureSelector = createFeatureSelector<GroupFeatureStateI>('group');

export const authStateSelector = createSelector(groupFeatureSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.authState;
});

export const userDetailsSelector = createSelector(groupFeatureSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.authState.userDetails;
});

export const authErrorSelector = createSelector(groupFeatureSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.authState.error;
});
