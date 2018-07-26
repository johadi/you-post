import { Action } from '@ngrx/store';
import { AddUserDetailsI } from '../../../interfaces';

export enum GroupActionTypes {
  GET_MESSAGES = '[group] get group messages',
  GET_MESSAGES_SUCCESS = '[group] get group messages success',
  CREATE_MESSAGE = '[group] send message',
  CREATE_MESSAGE_SUCCESS = '[group] send message success',
  CLEAR_ERROR = '[group] clear group related errors',
  RESET_CREATE_MESSAGE_STATE = '[group] reset create message state',
  GET_GROUP_USERS = '[group] get group users',
  GET_GROUP_USERS_SUCCESS = '[group] get group users success',
  GET_USERS_BY_SEARCH = '[group] get searched users',
  GET_USERS_BY_SEARCH_SUCCESS = '[group] get searched users success',
  RESET_GET_USERS_BY_SEARCH_STATE = '[group] reset get searched users state',
  ADD_USER_TO_GROUP = '[group] add user to group',
  ADD_USER_TO_GROUP_SUCCESS = '[group] add user to group success',
  RESET_ADD_USER_TO_GROUP_STATE = '[group] reset user to group state',
  CREATE_GROUP = '[group] create group',
  CREATE_GROUP_SUCCESS = '[group] create group success',
  RESET_CREATE_GROUP_STATE = '[group] reset create group state',
  GET_USER_GROUPS = '[group] get user groups',
  GET_USER_GROUPS_SUCCESS = '[group] get groups success',
  ERROR = '[group] group related errors'
}

export class GetGroupMessages implements Action {
  readonly type = GroupActionTypes.GET_MESSAGES;

  constructor(public payload: any) {
  }
}

export class GetGroupMessagesSuccess implements Action {
  readonly type = GroupActionTypes.GET_MESSAGES_SUCCESS;

  constructor(public payload: any) {
  }
}

export class CreateMessage implements Action {
  readonly type = GroupActionTypes.CREATE_MESSAGE;

  constructor(public payload: { messageDetail, groupId }) {
  }
}

export class CreateMessageSuccess implements Action {
  readonly type = GroupActionTypes.CREATE_MESSAGE_SUCCESS;

  constructor(public payload: any) {
  }
}

export class ResetCreateMessageState implements Action {
  readonly type = GroupActionTypes.RESET_CREATE_MESSAGE_STATE;
}

export class GetGroupUsers implements Action {
  readonly type = GroupActionTypes.GET_GROUP_USERS;

  constructor(public payload: any) {
  }
}

export class GetGroupUsersSuccess implements Action {
  readonly type = GroupActionTypes.GET_GROUP_USERS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class GetUsersBySearch implements Action {
  readonly type = GroupActionTypes.GET_USERS_BY_SEARCH;

  constructor(public payload: { searchTerm: string, groupId?: any }) {
  }
}

export class GetUsersBySearchSuccess implements Action {
  readonly type = GroupActionTypes.GET_USERS_BY_SEARCH_SUCCESS;

  constructor(public payload: any) {
  }
}

export class ResetGetUserBySearchState implements Action {
  readonly type = GroupActionTypes.RESET_GET_USERS_BY_SEARCH_STATE;
}

export class AddUserToGroup implements Action {
  readonly type = GroupActionTypes.ADD_USER_TO_GROUP;

  constructor(public payload: { userDetails: AddUserDetailsI, groupId: any }) {
  }
}

export class AddUserToGroupSuccess implements Action {
  readonly type = GroupActionTypes.ADD_USER_TO_GROUP_SUCCESS;

  constructor(public payload: any) {
  }
}

export class ResetAddUserToGroupState implements Action {
  readonly type = GroupActionTypes.RESET_ADD_USER_TO_GROUP_STATE;
}

export class CreateGroup implements Action {
  readonly type = GroupActionTypes.CREATE_GROUP;

  constructor(public payload: any) {}
}

export class CreateGroupSuccess implements Action {
  readonly type = GroupActionTypes.CREATE_GROUP_SUCCESS;

  constructor(public payload: any) {
  }
}

export class ResetCreateGroupState implements Action {
  readonly type = GroupActionTypes.RESET_CREATE_GROUP_STATE;
}

export class GetUserGroups implements Action {
  readonly type = GroupActionTypes.GET_USER_GROUPS;
}

export class GetUserGroupsSuccess implements Action {
  readonly type = GroupActionTypes.GET_USER_GROUPS_SUCCESS;

  constructor(public payload: any) {
  }
}

export class GroupError implements Action {
  readonly type = GroupActionTypes.ERROR;

  constructor(public payload: any) {
  }
}

export class ClearError implements Action {
  readonly type = GroupActionTypes.CLEAR_ERROR;
}

export type GroupActionUnions = GetGroupMessages
  | GetGroupMessagesSuccess
  | CreateMessage
  | CreateMessageSuccess
  | ResetCreateMessageState
  | GetGroupUsers
  | GetGroupUsersSuccess
  | GetUsersBySearch
  | GetUsersBySearchSuccess
  | ResetGetUserBySearchState
  | AddUserToGroup
  | AddUserToGroupSuccess
  | ResetAddUserToGroupState
  | CreateGroup
  | CreateGroupSuccess
  | ResetCreateGroupState
  | GetUserGroups
  | GetUserGroupsSuccess
  | GroupError
  | ClearError;
