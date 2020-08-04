import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {
  public question: any = {};
  quizId;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');

    this.api.questionSelected.subscribe(
      (question) => (this.question = question)
    );
  }

  postQuestion(question) {
    question.quizId = this.quizId * 1;
    this.api.postQuestion(question);
  }

  putQuestion(question) {
    this.api.putQuestion(question);
  }
}
