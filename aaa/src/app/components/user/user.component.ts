import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit 
{
  snig='';
  snigd='';
  aa:string;
  age:number;
  onClick()
  {
    this.age=30;
  }
  constructor() { }

  ngOnInit() {  
    this.aa='Snigdha';
    this.age=23;
   }

}
