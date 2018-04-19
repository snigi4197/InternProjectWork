import { Component, OnInit,Input }                  from '@angular/core';
import { FormGroup,ReactiveFormsModule }            from '@angular/forms';
import { FormControl,Validators }                    from '@angular/forms';
import { DataControlService }                       from '../data-control.service';
import { dataFormat }                               from '../dataformat';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[DataControlService]
})
export class FormComponent implements OnInit {
dform:FormGroup;
message:'';
@Input() dataformat_input :dataFormat<any>[] =[ ];

constructor( private data_control:DataControlService) { }

ngOnInit() 
  {
  // this.form=this.data_control.checkFormParameters(this.dataformat_input);  
  
  this.dform=new FormGroup({
    name:new FormGroup({
      firstname:new FormControl("",Validators.required),
      lastname:new FormControl("",Validators.required)
    })
  });
  }
  submit=function(value)
  {
    this.message=JSON.stringify(this.dform.value);
    console.log(value);
  }
  // onSubmit=function(value)
  // {
  //   console.log(value);
  //  this.message=JSON.stringify(this.form.value);
  // }

}
