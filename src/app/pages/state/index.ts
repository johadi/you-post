export interface ErrorI {
  message: any;
  status: any;
  type: string;
}

export interface GroupStateI {
  groupMessages: object;
  createMessageSuccess: any;
  groupUsers: any;
  addUserToGroupSuccess: any;
  searchedUserDetails: any;
  createGroupSuccess: any;
  userGroups: any;
  dashboardMessages: any;
  error: ErrorI;
}

export interface AuthStateI {
  isLoading: boolean;
  isAuthenticating: boolean;
  signupSuccess: boolean;
  signinSuccess: boolean;
  userDetails: any;
  error: any;
}
export interface GroupFeatureStateI {
  groupState: GroupStateI;
  authState: AuthStateI;
}

export interface AppStateI {
  group: GroupFeatureStateI;
}
