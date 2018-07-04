import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //setting the value of cookiee
  cookieValue = 'UNKNOWN';
regform;
constructor(private authService: AuthService, private router: Router,private cookieService: CookieService) { }
ngOnInit() { 
  // this.cookieService.set( 'register', 'Hello World' );//key=test, value=hello world
  // this.cookieValue = this.cookieService.get('register');

  this.regform=new FormGroup({
    email:new FormControl("",Validators.compose(
      [
        Validators.required
      ]
    )),
    phone:new FormControl("",Validators.compose(
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]
    )),
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  });
  console.log(this.regform);
}
onSubmit=function(form)
  {
  console.log(form);
  this.authService.register(form).subscribe((data) => {
    console.log(data);
    if (data.status) {
      console.log("welcome !!!");
      this.cookieService.set( 'register', 'Hello World' );//key=test, value=hello world
      this.cookieValue = this.cookieService.get('register');
      console.log( this.cookieValue);
      this.router.navigate(['']);
    } else {
      console.log("Unsuccessful !!!!");
    }
  });
   }
}
 
  
     