import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import 'rxjs/Rx';
@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
form:FormGroup;

searchField: FormControl; 
searches: string[] = []; 


  constructor(private fb: FormBuilder) {
     
    this.form = new FormGroup(
      {
      name: new FormControl()
     })
  }
ngOnInit() {

  this.searchField = new FormControl();
  this.searchField.valueChanges
 
  .subscribe(data=>
    {
    if(this.form.valid)
      {
        console.log(JSON.stringify(data));
      }
    
    });
        // term => {  
        //   this.searches.push(term);
        // }


  }

}
