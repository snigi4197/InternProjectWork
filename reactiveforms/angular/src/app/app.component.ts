import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import {dataFormat} from './dataformat';
@Component({
  selector: 'app-root',
  template: `
  <div align="center">
    <h2>Dynamic Form Example</h2>
    <app-dynamic-form [questions]="questions"></app-dynamic-form>
  </div>

`,
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'app';
  questions: any[]; 
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
