import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { Router } from '@angular/router';
import { AuthguardService } from '../authguard.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
rform;
getdata={
  _id:"",
  name:"",
  age:"",
  comment:"",
  Enter_hobbies_Details:"",
  qualification:""
};
a='';
elements=[];
message;
  constructor(private router: Router,private authData:AuthguardService) { }

  ngOnInit() 
  {
    console.log("in update component :",this.authData.data);

    this.rform=new FormGroup(
      {
        _id:new FormControl(" "),
        name:new FormControl(" "),
        age:new FormControl(" "),
        comment:new FormControl(" "),
        qualification:new FormControl(" "),
        Enter_hobbies_Details:new FormControl(" ")
      }
    );
    console.log("in update : ",this.authData.data);
    this.a=this.authData.data;
    console.log("a is", this.a);
    this.authData.view(this.a).subscribe((data)=>
    {
      this.getdata=this.authData.data;
      console.log("getdata:",this.getdata);
    });
  }
  onSubmit(value) 
  {
    console.log("on submit",value);
   console.log("ll",this.rform.value);
    for(let sn in this.rform.value) // hell important to understand 
    {
      console.log(sn);
      if(sn=='Enter_hobbies_Details')
      {
        console.log("j",this.rform.value[sn]);
        this.rform.value[sn]=this.elements;
        this.message = JSON.stringify(this.rform.value[sn]);
      }
      else
      {
        this.message = JSON.stringify(this.rform.value);     
      }
    }
    console.log("gg ",this.rform.value);

    
    this.getdata._id=this.getdata._id;
    this.getdata.name=this.rform.value.name;
    this.getdata.age=this.rform.value.age;
    this.getdata.comment=this.rform.value.comment;
    this.getdata.Enter_hobbies_Details=this.rform.value.Enter_hobbies_Details;
    this.getdata.qualification=this.rform.value.qualification;
    
    console.log("kk: : : :",this.getdata);
    
    
      this.authData.edit(this.getdata).subscribe((data)=>
    {
      console.log("dddddd",data);
      this.router.navigate(['']);
    });
  //   this.authData.update(value).subscribe((data)=>
  // {
  //   console.log("in snigi : ", value);
  //   console.log(data);
  //   this.router.navigate(['']);
  // });
  }
}
