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
  error: ErrorI;
}

export interface GroupFeatureStateI {
  groupState: GroupStateI;
}

export interface AppStateI {
  group: GroupFeatureStateI;
}
