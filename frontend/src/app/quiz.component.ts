import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styles: [
  ]
})
export class QuizComponent implements OnInit {

  public quiz: any = {};

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }

  postQuiz(quiz) {
    this.api.postQuiz(quiz);
  }

  putQuiz(quiz) {
    this.api.putQuiz(quiz);
  }
}
