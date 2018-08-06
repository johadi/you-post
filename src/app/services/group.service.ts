import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { CreateGroupI, CreateMessageI, AddUserDetailsI } from '../interfaces';

@Injectable()
export class GroupService {
  private apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getUserGroups() {
    return this.http.get(`${this.apiBaseUrl}/v1/group/user/groups`)
      .pipe(catchError(this.handleError));
  }

  getGroupMessages(groupId) {
    return this.http.get(`${this.apiBaseUrl}/v1/group/${groupId}/message`)
      .pipe(catchError(this.handleError));
  }

  getGroupUsers(groupId) {
    return this.http.get(`${this.apiBaseUrl}/v1/group/${groupId}/group-users`)
      .pipe(catchError(this.handleError));
  }

  createGroup(groupName: CreateGroupI) {
    return this.http.post(`${this.apiBaseUrl}/v1/group`, groupName)
      .pipe(catchError(this.handleError));
  }

  createMessage(messageDetails: CreateMessageI, groupId: any) {
    return this.http.post(`${this.apiBaseUrl}/v1/group/${groupId}/message`, messageDetails)
      .pipe(catchError(this.handleError));
  }

  getUsersBySearch(searchTerm = null, groupId) {
    return this.http.get(`${this.apiBaseUrl}/v1/users?search=${searchTerm}&groupId=${groupId}`)
      .pipe(catchError(this.handleError));
  }

  getDashboardMessages() {
    return this.http.get(`${this.apiBaseUrl}/v1/group/user/board`)
      .pipe(catchError(this.handleError));
  }

  addUserToGroup(userDetails: AddUserDetailsI, groupId: any) {
    return this.http.post(`${this.apiBaseUrl}/v1/group/${groupId}/user`, userDetails)
      .pipe(catchError(this.handleError));
  }

  getMessage(groupId: any, messageId: any) {
    return this.http.get(`${this.apiBaseUrl}/v1/group/${groupId}/message/${messageId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorBody: any = {};
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorBody.message = error.error.message;
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorBody.message = error.error;
      errorBody.status = error.status;
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(errorBody);
  }

}
