import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../models/jwt-response';
import { Organization } from '../models/organization';
import { Employees } from '../models/employees';
import { Login } from '../models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private orgSignupUrl = 'http://localhost:8080/api/auth/organization';
  private empSignupUrl = 'http://localhost:8080/api/auth/employee';

  constructor(private http: HttpClient) { }

  login(credentials: Login): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  OrgSignup(org: Organization): Observable<any> {
    return this.http.post<any>(this.orgSignupUrl, org, httpOptions);
  }

  EmpSignup(emp: Employees): Observable<any> {
    return this.http.post<any>(this.empSignupUrl, emp, httpOptions);
  }
}
