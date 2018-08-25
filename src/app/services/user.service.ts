import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {

  private apiBaseUrl = environment.apiBaseUrl;
  private defaultAvatarPath = 'assets/images/default.png';

  constructor(private http: HttpClient) {
  }

  get getDefaultAvatarPath() {
    return this.defaultAvatarPath;
  }

  updateUser(updateDetails) {
    return this.http.post(`${this.apiBaseUrl}/v1/user`, updateDetails)
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
