import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl,FormArray , Validators} from '@angular/forms';
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  list;
  constructor(private http:Http,private authService: AuthService) { }
aform;
  ngOnInit() 
  {
    this.aform=new FormGroup(
      {
        date:new FormControl("",Validators.required),
        class:new FormControl("",Validators.required)
      });
  }
  onSubmit(user)
  {
    console.log("values are: ",this.aform.value);
    this.authService.attendence(user).subscribe((data)=>
    {
      console.log(data);
      if(data.status)
      {
        console.log("sucessfull");
        this.list=data.data;
        console.log(this.list);
      }
      else
      {
        console.log("unsucessfull");
      }
    });
  }

}
