import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular application';
  forms;
  constructor(private formbuilder:FormBuilder)
  {
 this.forms=formbuilder.group({
   'name':""
 });
 console.log("hey , I am in angular module !!");
 }
 submit(value)
 {
  console.log("the value is :",value);
  //console.log(this.forms.patchValue(value));
}
}
