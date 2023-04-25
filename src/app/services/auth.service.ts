import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  authService: any;
  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }
  baseurl = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseurl}/api/login/`,
      { email: username, password },
      { headers: this.httpHeaders }
    );
  }

  logout(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.delete(
      `${this.baseurl}/api/logout/`,
      { headers }
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseurl}/api/register/`,
      { name, email, password },
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
  newPassword(email: string): Observable<any>
    {
      return this.http.put(
       `${this.baseurl}/api/updateRandom/${email}`,{});
    }

}
