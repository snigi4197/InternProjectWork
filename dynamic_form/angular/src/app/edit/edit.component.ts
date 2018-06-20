import { Component, OnInit,Input } from '@angular/core';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { Router } from '@angular/router';
import { AuthguardService } from '../authguard.service';
import { DataControlService } from '../data-control.service';
import { dataFormat } from '../dataformat'; 
import { QuestionService } from '../question.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  a;
  inputdata:any[];
 
  constructor(private authData:AuthguardService,
              inputdata:DataService) 
  { 
    this.inputdata=inputdata.getdata();
    //console.log("input data",this.inputdata);
  }

  ngOnInit() 
  {
    this.a=this.authData.data;
    //console.log("A is :::::", this.authData.data);
  }

}
