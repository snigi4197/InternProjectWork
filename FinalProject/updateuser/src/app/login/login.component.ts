import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
lform;
c;
g;
constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    //angular defined method for validation
    this.lform=new FormGroup(
      {
        email:new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(3) ])),
        password:new FormControl("",this.test)
      }
    );
  }
  test(control) //custom validator method
  {
      if (control.value.length<3)
      {
          return{'password':true};
      }
  }
  
  onSubmit=function(value)
  {
  
  this.authService.login(value).subscribe((data) => {
  console.log(data);
  if (data.status) {
    console.log("welcome :::  ");
    localStorage.setItem("GetTheEmail",value.email);
    this.g=localStorage.getItem("GetTheEmail");
    console.log(this.g);

    this.router.navigate(['/home']);
    
    console.log("bbye");
  } else {
    console.log("Unsuccessfull !!!!");
    this.c=data.message;
    console.log(this.c);
  }
});
  }
}
