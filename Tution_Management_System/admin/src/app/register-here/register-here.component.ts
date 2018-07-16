import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register-here',
  templateUrl: './register-here.component.html',
  styleUrls: ['./register-here.component.css']
})
export class RegisterHereComponent implements OnInit {
rforms;
  constructor() { }

  ngOnInit() 
  {
    this.rforms=new FormGroup(
      {
        name:new FormControl(""), 
        age:new FormControl(""),
        class:new FormControl(""),
        sex: new FormControl(""),
        address:new FormControl(""),
        email:new FormControl("")
      }
    );
    console.log("the data is ");
  }
  Submit_here=function(data)
  {
    console.log("the form values are :: ", data);
  }

}
