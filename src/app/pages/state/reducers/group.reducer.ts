import { GroupActionTypes, GroupActionUnions } from '../actions';
import { GroupStateI } from '../';

const initialState: GroupStateI = {
  groupMessages: null,
  createMessageSuccess: null,
  groupUsers: null,
  addUserToGroupSuccess: null,
  searchedUserDetails: null,
  createGroupSuccess: null,
  userGroups: null,
  error: null
}

export const groupReducer = (state: GroupStateI = initialState, action: GroupActionUnions): GroupStateI => {
  switch (action.type) {
    case GroupActionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        error: null,
        groupMessages: action.payload
      };
    case GroupActionTypes.CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        error: null,
        createMessageSuccess: action.payload
      };
    case GroupActionTypes.RESET_CREATE_MESSAGE_STATE:
      return {
        ...state,
        error: null,
        createMessageSuccess: null
      };
    case GroupActionTypes.GET_GROUP_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        groupUsers: action.payload
      };
    case GroupActionTypes.GET_USERS_BY_SEARCH_SUCCESS:
      return {
        ...state,
        error: null,
        searchedUserDetails: action.payload
      };
    case GroupActionTypes.RESET_GET_USERS_BY_SEARCH_STATE:
      return {
        ...state,
        error: null,
        searchedUserDetails: null
      };
    case GroupActionTypes.ADD_USER_TO_GROUP_SUCCESS:
      return {
        ...state,
        error: null,
        addUserToGroupSuccess: action.payload
      };
    case GroupActionTypes.RESET_ADD_USER_TO_GROUP_STATE:
      return {
        ...state,
        error: null,
        addUserToGroupSuccess: null
      };
    case GroupActionTypes.CREATE_GROUP_SUCCESS:
      return {
        ...state,
        error: null,
        createGroupSuccess: action.payload
      };
    case GroupActionTypes.RESET_CREATE_GROUP_STATE:
      return {
        ...state,
        error: null,
        createGroupSuccess: null
      };
    case GroupActionTypes.GET_USER_GROUPS_SUCCESS:
      return {
        ...state,
        error: null,
        userGroups: action.payload
      };
    case GroupActionTypes.ERROR:
      return {
        ...state,
        error: action.payload
      };
    case GroupActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
}
