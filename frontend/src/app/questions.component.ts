import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styles: [],
})
export class QuestionsComponent implements OnInit {
  question = {};
  questions;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const quizId = this.route.snapshot.paramMap.get('quizId');

    this.api.getQuestions(quizId).subscribe((res) => {
      this.questions = res;
    });
  }

  selectQuestion(question) {
    this.api.selectQuestion(question);
  }
}
