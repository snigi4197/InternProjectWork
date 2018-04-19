import { Component } from '@angular/core';
import {person} from './person';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  providers:  []
})
export class AppComponent {
  
  person;
  constructor() 
  {
    let pers=new person();
    console.log(pers.getData());
    

  }
}