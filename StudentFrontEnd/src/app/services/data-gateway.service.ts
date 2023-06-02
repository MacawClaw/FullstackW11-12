import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInfo } from './LoginInfo';
import { AccountRegistration } from './AccountRegistration';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DataGatewayService {
  private apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient, private router: Router) { }

  getLoginStatus(loginData: LoginInfo): Observable<any> {
    console.log(loginData);

    return this.http.post(`${this.apiUrl}/api/v1/user/login`, loginData);
  }

  getAccountRegistered(accountRegistration: AccountRegistration): Observable<any> {
    console.log(accountRegistration);
    return this.http.post(`${this.apiUrl}/api/v1/user/save`, accountRegistration, {responseType: 'text'});
  }
}
