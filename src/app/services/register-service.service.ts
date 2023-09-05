import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

register(name: string, email: string, password: string): Observable<any>{
  return this.http.post(
    `${this.baseurl}/api/register/`,
    { name, email, password},
    { headers: this.httpHeaders }
  );

}
login(email: string, password: string): Observable<any>{
  return this.http.post(
    `${this.baseurl}/api/login/`,
    { email, password},
    { headers: this.httpHeaders }
  );
}
getCurrentUser(id:any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  });

  return this.http.get(`${this.baseurl}/api/users/show/`+id, { headers });
}
isLoggedIn(): boolean {
  const token = localStorage.getItem('access_token');
  return !!token;
}


}

