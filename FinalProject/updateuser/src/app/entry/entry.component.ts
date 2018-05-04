import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl,FormArray , Validators} from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { AuthService } from '../auth.service';
import { Http} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
eform;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() 
  {
    this.eform=new FormGroup(
      {
      name:new FormControl("",Validators.required),
      age:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      class:new FormControl("",Validators.required),
      status: new FormControl("",Validators.required),
      date:new FormControl("",Validators.required)
      }
    );
  }

  onSubmit(user)
  {
    console.log("values are: ",this.eform.value);
    this.authService.entry(user).subscribe((data) => {
      console.log(data);
      if (data.status)
      {
        console.log("successful !!!!");
        this.router.navigate(['/home']);
      } 
      else 
      {
        console.log("Unsuccessful !!!!");
      }
    });
  }
}
