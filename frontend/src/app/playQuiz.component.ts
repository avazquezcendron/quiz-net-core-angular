import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { FinishedComponent } from './finished.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './playQuiz.component.html',
  styles: [],
})
export class PlayQuizComponent implements OnInit {
  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) {}

  quizId;
  questions;

  step = 0;

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');

    this.api.getQuestions(this.quizId).subscribe((res) => {
      this.questions = res;
      this.questions.forEach((q) => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
        shuffle(q.answers);
      });
    });
  }

  finish() {
    let correct = 0;
    this.questions.forEach((q) => {
      if (q.correctAnswer === q.selectedAnswer) { correct++; }
    });

    const dialogRef = this.dialog.open(FinishedComponent, {
      data: { correct, total: this.questions.length },
    });

    console.log(correct);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
