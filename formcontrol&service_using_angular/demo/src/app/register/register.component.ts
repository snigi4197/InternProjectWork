import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import { ValidateService } from '../validate.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
rform ;
  constructor(private validateService: ValidateService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  	this.rform = new FormGroup({
      username: new FormControl("", Validators.compose([
  			Validators.required,
  			Validators.pattern('[a-zA-Z]+')
  			])),
      email: new FormControl("", Validators.compose([
  			Validators.required
  			//Validators.pattern('[a-zA-Z]+')
  			])),
      password: new FormControl("", Validators.compose([
  			Validators.required
     // Validators.pattern('[a-zA-Z]+')
      ])),
      customer_name: new FormControl("", Validators.compose([
        Validators.required,
      Validators.pattern('[a-zA-Z]+')
      ])),
      phone_number: new FormControl("", Validators.compose([
        Validators.required
        //Validators.pattern('[0-9]+{12}')
      ])),
  	});
  }
  onSubmit(User) {

    console.log(User);
   /* if (!this.validateService.validateRegister(User)) {
      console.log("Please fill in all fields");
       return false;
    }
    if (!this.validateService.validateEmail(User.email)) {
      console.log("Please use a valid email");
      return false;
    }*/

  /*
    this.authService.registerUser(User).subscribe((data) => {
      console.log(data);
      if (data.status) {
        this.router.navigate(['/login']);
      } else {
      this.router.navigate(['']);
      }
    });*/
  }
}
