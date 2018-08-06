import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GroupFeatureStateI } from '../';

export const groupSelector = createFeatureSelector<GroupFeatureStateI>('group');

export const getGroupStateSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState;
});

export const groupMessagesSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.groupMessages;
});

export const groupUsersSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.groupUsers;
});

export const createMessageSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.createMessageSuccess;
});

export const searchUsersSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.searchedUserDetails;
});

export const addUserToGroupSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.addUserToGroupSuccess;
});

export const errorSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.error;
});

export const createGroupSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.createGroupSuccess;
});

export const getUserGroupsSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.userGroups;
});

export const getDashboardMessagesSelector = createSelector(groupSelector, (groupFeatureState: GroupFeatureStateI) => {
  return groupFeatureState.groupState.dashboardMessages;
});
