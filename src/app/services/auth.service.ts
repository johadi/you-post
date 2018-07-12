import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { toPromise } from 'rxjs/operator/toPromise';
// import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  signup(userDetails) {
    return this.http.post(`${this.apiBaseUrl}/v1/user/signup`, userDetails)
      .catch(this.handleError);
  }

  signin(userCredentials) {
    return this.http.post(`${this.apiBaseUrl}/v1/user/signin`, userCredentials)
      .catch(this.handleError);
  }

  verifyUser() {
    if (localStorage.token) {
      return this.http.get(`${this.apiBaseUrl}/v1/verify-token`)
        .toPromise()
        .then((result => {
          console.log(result);
        }));
    }
  }

  private handleError(error: HttpErrorResponse) {
    const errorBody: any = {};
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorBody.message =  error.error.message;
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
    return Observable.throw(errorBody);
  }

  getAuthorizationToken() {
    return localStorage.token ? localStorage.token : '';
  }

}
