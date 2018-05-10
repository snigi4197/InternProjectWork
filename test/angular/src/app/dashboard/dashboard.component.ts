import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
form;
  constructor( private auth:AuthService) { }

  ngOnInit() {
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
   console.log(this.auth.a);
  }
  }


