import { Component, OnInit } from '@angular/core';

@Component({
  template: '<app-quiz></app-quiz><hr><app-quizzes></app-quizzes>'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
