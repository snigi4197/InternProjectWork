import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form;
  constructor( public auth :AuthService) { }

  ngOnInit() 
  {
    this.form=new FormGroup(
      {
        hostname:new FormControl(""),
        loopback:new FormControl("")
      }
    );
    console.log(this.form);
  }
  onSubmit=function(value)
  {
    console.log(value);
   
  }

}
