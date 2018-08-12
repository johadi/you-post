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
  dashboardMessages: null,
  currentViewingMessage: null,
  isLoading: false,
  error: null
};

export function groupReducer (state: GroupStateI = initialState, action: GroupActionUnions): GroupStateI {
  switch (action.type) {
    case GroupActionTypes.GET_MESSAGES_SUCCESS:
      const previousMessages = state.groupMessages && action.payload.metaData.currentPage > 1 ? state.groupMessages.rows : [];
      return {
        ...state,
        error: null,
        groupMessages: { ...action.payload, rows: [...previousMessages, ...action.payload.rows] }
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
    case GroupActionTypes.GET_DASHBOARD_MESSAGES_SUCCESS:
      const previousDashboardMessages = state.dashboardMessages && action.payload.metaData.currentPage > 1 ?
        state.dashboardMessages.messages : [];
      return {
        ...state,
        error: null,
        dashboardMessages: { ...action.payload, messages: [...previousDashboardMessages, ...action.payload.messages] }
      };
    case GroupActionTypes.GET_MESSAGE:
      return {
        ...state,
        error: null,
        isLoading: true,
        currentViewingMessage: null
      };
    case GroupActionTypes.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        error: null,
        currentViewingMessage: action.payload,
        isLoading: false
      };
    case GroupActionTypes.RESET_VIEWING_MESSAGE:
      return {
        ...state,
        error: null,
        isLoading: false,
        currentViewingMessage: null
      };
    case GroupActionTypes.UPDATE_VIEWING_MESSAGE:
      return {
        ...state,
        error: null,
        currentViewingMessage: action.payload,
        isLoading: false
      };
    case GroupActionTypes.UPDATE_GROUPBOARD_MESSAGES:
      const clonedGroupMessages = [...state.groupMessages.rows];
      const { messageId, userId } = action.payload;
      const readGroupMessageIndex = clonedGroupMessages.findIndex(message => message.id === messageId);
      let updateStatus = false;
      if (clonedGroupMessages[readGroupMessageIndex].readersId.indexOf(userId) === -1) {
        clonedGroupMessages[readGroupMessageIndex].readersId.push(userId);
        updateStatus = true;
      }

      return updateStatus ?
        {
          ...state, groupMessages: {...state.groupMessages, rows: clonedGroupMessages}
        } :
        state;
    case GroupActionTypes.UPDATE_DASHBOARD_MESSAGES:
      const clonedMessages = [...state.dashboardMessages.messages];
      const readMessageIndex = clonedMessages.findIndex(message => message.id === action.payload);
      clonedMessages.splice(readMessageIndex, 1);

      return {
        ...state,
        dashboardMessages: {...state.dashboardMessages, messages: clonedMessages}
      };
    case GroupActionTypes.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GroupActionTypes.CLEAR_ERROR:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    default:
      return state;
  }
};
