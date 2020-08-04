import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {

  quiz = {};
  quizzes;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getQuizzes().subscribe((res) => {
      this.quizzes = res;
    });
  }

  selectQuiz(question) {
    this.api.selectQuiz(question);
  }
}
