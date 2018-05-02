import { Component, OnInit,Input }                  from '@angular/core';
import { FormGroup,ReactiveFormsModule }            from '@angular/forms';
import { FormControl,Validators }                    from '@angular/forms';
import { DataControlService }                       from '../data-control.service';
import { dataFormat }                               from '../dataformat';
import {datafile}                                   from '../data/jsonfile';
import { DataService } from '../data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[DataControlService]
})
export class FormComponent implements OnInit 
{
dform:FormGroup;
message:'';
input_data:any[];
//json data member 
datafile:Array<any>=datafile;

// This is a array example.
toDos: string[] =["Item 1","Item 2"];
@Input() dataformat_input :dataFormat<any>[]=[ ];

constructor( private data_control:DataControlService,input_data:DataService) { 
    input_data.getdata();
}

ngOnInit() 
{
  // this.form=this.data_control.checkFormParameters(this.dataformat_input);  
  this.dform=new FormGroup(
    {
    name:new FormGroup(
      {
      firstname:new FormControl("",Validators.required),
      lastname:new FormControl("",Validators.required)
      })
    });
}

//for displaying the elements of the form using json 
submit=function(value)
{
  this.message=JSON.stringify(this.dform.value);
  console.log(value);
}
//adding an element in the array
trackByIndex=function(index: number, obj: any): any 
{
  return index;
}
addItem=function() 
{
  this.toDos.push('0');
}
//deleting an item
delItem=function() 
{
  this.toDos.pop('0');
}

  // onSubmit=function(value)
  // {
  //   console.log(value);
  //  this.message=JSON.stringify(this.form.value);
  // }

}