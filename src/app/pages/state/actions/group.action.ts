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
  CREATE_GROUP = '[user] create group',
  CREATE_GROUP_SUCCESS = '[user] create group success',
  RESET_CREATE_GROUP_STATE = '[user] reset create group state',
  GET_USER_GROUPS = '[user] get user groups',
  GET_USER_GROUPS_SUCCESS = '[user] get user groups success',
  GET_DASHBOARD_MESSAGES = '[user] get messages of dashboard',
  GET_DASHBOARD_MESSAGES_SUCCESS = '[user] get messages of dashboard success',
  GET_MESSAGE = '[group] get message for reading',
  GET_MESSAGE_SUCCESS = '[group] get message for reading success',
  RESET_VIEWING_MESSAGE = '[group] reset viewing message related states',
  UPDATE_VIEWING_MESSAGE = '[group] update viewing message if user already read it',
  UPDATE_GROUPBOARD_MESSAGES = '[group] update group board messages after user read one of it',
  UPDATE_DASHBOARD_MESSAGES = '[group] update dashboard messages after one of is read',
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
export class GetDashboardMessages implements Action {
  readonly type = GroupActionTypes.GET_DASHBOARD_MESSAGES;
  constructor(public payload: any) {
  }
}

export class GetDashboardMessagesSuccess implements Action {
  readonly type = GroupActionTypes.GET_DASHBOARD_MESSAGES_SUCCESS;

  constructor(public payload: any) {
  }
}

export class GetMessage implements Action {
  readonly type = GroupActionTypes.GET_MESSAGE;

  constructor(public payload: {groupId, messageId}) {
  }
}

export class GetMessageSuccess implements Action {
  readonly type = GroupActionTypes.GET_MESSAGE_SUCCESS;

  constructor(public payload: any) {
  }
}

export class ResetViewingMessageState implements Action {
  readonly type = GroupActionTypes.RESET_VIEWING_MESSAGE;
}

export class UpdateViewingMessageState implements Action {
  readonly type = GroupActionTypes.UPDATE_VIEWING_MESSAGE;
  constructor(public payload: any) {
  }
}

export class UpdateGroupBoardMessages implements Action {
  readonly type = GroupActionTypes.UPDATE_GROUPBOARD_MESSAGES;

  constructor(public payload: any) {
  }
}

export class UpdateDashboardMessages implements Action {
  readonly type = GroupActionTypes.UPDATE_DASHBOARD_MESSAGES;

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
  | GetDashboardMessages
  | GetDashboardMessagesSuccess
  | GetMessage
  | GetMessageSuccess
  | ResetViewingMessageState
  | UpdateViewingMessageState
  | UpdateGroupBoardMessages
  | UpdateDashboardMessages
  | GroupError
  | ClearError;
