import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-nav',
  template: `
    <mat-toolbar>
      <button mat-button routerLink="/">My Quiz</button>
      <button mat-button routerLink="/play">Play</button>
      <span style="flex: 1 1 auto;"></span>
      <button mat-button *ngIf="!isAuthenticated" mat-button routerLink="/register">Register</button>
      <button mat-button *ngIf="!isAuthenticated" routerLink="/login">Login</button>
      <button mat-button *ngIf="isAuthenticated" (click)="logout()">Logout</button>
    </mat-toolbar>
  `,
})
export class NavComponent {

  constructor(private auth: AuthService) { }

  get isAuthenticated() {
    return this.auth.isAuthenticated;
  }

  logout() {
    this.auth.logout();
  }
}
