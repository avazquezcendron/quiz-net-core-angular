import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register(credentials) {
    return this.http
      .post(`http://localhost:61520/api/account/`, credentials, {
        responseType: 'text',
      })
      .subscribe((res) => {
        this.authenticate(res);
      });
  }

  login(credentials) {
    return this.http
      .post(`http://localhost:61520/api/account/login`, credentials, {
        responseType: 'text',
      })
      .subscribe((res) => {
        this.authenticate(res);
      });
  }

  private authenticate(res: string) {
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
