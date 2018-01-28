import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getApi() {
    return this.http.get('/test', {responseType: 'text'});
  }

}
