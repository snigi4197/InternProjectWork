import { Component, OnInit,Input }     from '@angular/core';
import { FormGroup }                   from '@angular/forms';
import { dataFormat }                  from '../dataformat'; 
@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent implements OnInit {
  @Input() inputdata: dataFormat<any>;
  @Input() forms: FormGroup;
  isValid() 
  {
     return this.forms.controls[this.inputdata.key].valid; 
  }
  constructor() { }
  ngOnInit() 
  {
    //console.log("forms",this.forms);
    //console.log("inputdata",this.inputdata);
    //this.forms.patchValue(this.inputdata);
  }
  checkBoxClicked(evt,data)
  {
    //this event is triggered when we will click the submit button
    console.log("evt",evt);
    data.selected=evt.target.checked;
  }
}