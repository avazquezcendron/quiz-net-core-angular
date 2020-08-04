import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styles: [
  ]
})
export class PlayComponent implements OnInit {

  quizzes;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllQuizzes().subscribe((res) => {
      this.quizzes = res;
    });
  }
}
