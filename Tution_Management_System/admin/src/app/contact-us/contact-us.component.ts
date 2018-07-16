import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
form;
  constructor() { }

  ngOnInit() 
  {
    this.form=new FormGroup(
      {
        name:new FormControl(""), 
        email:new FormControl(""),
        queries:new FormControl("")
      }
    );
  }
onSubmit=function(data)
{
  console.log("the value are : ",data);
}
}
