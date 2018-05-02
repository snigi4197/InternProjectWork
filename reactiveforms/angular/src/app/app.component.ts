import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import {dataFormat} from './dataformat';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template: `
  <div align="center">
  
<h2 style="font-style:italic">
<u>
Dynamic Form Example
</u>
</h2>
<app-data-parent [inputdata]="inputdata"></app-data-parent>
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


// <h2>Dynamic Form Example</h2>
//   <div>
//   <app-dynamic-form [questions]="questions"></app-dynamic-form>
//   </div>
//   <app-form></app-form>
//   <div>