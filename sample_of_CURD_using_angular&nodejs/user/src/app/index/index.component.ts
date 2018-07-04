import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  forms;
  constructor() { }

  

  ngOnInit() { 
     
    this.forms=new FormGroup(
      {
        phone: new FormControl("",Validators.required),
        username: new FormControl("",Validators.required),
        password: new FormControl("",Validators.required),
        customername: new FormControl("",Validators.required),
        circuitid: new FormControl("",Validators.required)
      }
    );

}
  onSubmit=function(user)
  {
    console.log(user);
  }
}
