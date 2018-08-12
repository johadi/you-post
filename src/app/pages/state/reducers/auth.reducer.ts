import { AuthActionTypes, AuthActionUnions } from '../actions';
import { AuthStateI } from '../';

const initialState: AuthStateI = {
  isLoading: false,
  isAuthenticating: false,
  signupSuccess: false,
  signinSuccess: false,
  userDetails: null,
  error: null
};

export function authReducer (state: AuthStateI = initialState, action: AuthActionUnions): AuthStateI {
  switch (action.type) {
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
        signupSuccess: true
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        signinSuccess: true
      };
    case AuthActionTypes.VERIFY_USER:
      return {
        ...state,
        error: null,
        isAuthenticating: true,
        signinSuccess: false,
        signupSuccess: false,
      };
    case AuthActionTypes.VERIFY_USER_SUCCESS:
      return {
        ...state,
        error: null,
        isAuthenticating: false,
        userDetails: action.payload
      };
    case AuthActionTypes.ERROR:
      return {
        ...state,
        signinSuccess: false,
        signupSuccess: false,
        isAuthenticating: false,
        userDetails: null,
        error: action.payload
      };
    case AuthActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case AuthActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
