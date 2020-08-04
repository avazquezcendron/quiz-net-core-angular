import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `
        <h1>Your Score</h1>
        <h2>{{data.correct}}/{{data.total}}</h2>
    `
})
export class FinishedComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}
