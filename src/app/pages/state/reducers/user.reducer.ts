import { UserActionTypes, UserActionUnions } from '../actions';
import { UserStateI } from '../';

const initialState: UserStateI = {
  isLoading: false,
  userIsUpdated: false,
  error: null
};

export function userReducer (state: UserStateI = initialState, action: UserActionUnions): UserStateI {
  switch (action.type) {
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        error: null,
        userIsUpdated: true
      };
    case UserActionTypes.ERROR:
      return {
        ...state,
        userIsUpdated: false,
        error: action.payload
      };
    case UserActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
}
