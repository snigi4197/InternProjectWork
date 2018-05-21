import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import {dataFormat} from './dataformat';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template: `
  <div>
  <router-outlet></router-outlet>
 </div>
 
`,
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'app';
  questions: any[]; 
  inputdata:any[];
  constructor(service: QuestionService , inputdata:DataService) {
    this.questions = service.getQuestions();
    this.inputdata=inputdata.getdata();
    console.log("input data",this.inputdata);
  }
}

