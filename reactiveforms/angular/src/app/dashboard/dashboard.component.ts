import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import {dataFormat} from '../dataformat';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions: any[]; 
  inputdata:any[];
  constructor(service: QuestionService , inputdata:DataService) 
  { 
    this.questions = service.getQuestions();
    this.inputdata=inputdata.getdata();
    //console.log("input data",this.inputdata); 
  }

  ngOnInit() {
  }

}
