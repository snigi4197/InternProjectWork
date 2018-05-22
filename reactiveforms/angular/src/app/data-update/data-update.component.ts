import { Component, OnInit,Input } from '@angular/core';
import {FormControl , Validators}             from '@angular/forms';
import { AuthguardService }                   from '../authguard.service';
import { FormGroup,ReactiveFormsModule }       from '@angular/forms';
import { dataFormat }                         from '../dataformat'; 
import { DataControlService }                 from '../data-control.service';
import { Http} from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-update',
  templateUrl: './data-update.component.html',
  styleUrls: ['./data-update.component.css'],
  providers:[DataControlService]
})
export class DataUpdateComponent implements OnInit {
  @Input() inputdata: dataFormat<any>[] = [];
  forms:FormGroup;
  message="";
  id_data;
  data={
    _id:"",
    name:"",
    age:"",
    comment:"",
    Enter_hobbies_Details:"",
    qualification:""
  };
  constructor(private datacontrol:DataControlService,
              private authData:AuthguardService,
              private router: Router) 
  { }
  ngOnInit() 
  {   
  this.data=this.authData.data;
  //console.log("DATA : ",this.data);
  this.forms= this.datacontrol.checkFormParameters(this.inputdata);
  //console.log("FORMS  ::",this.forms);
  //console.log("FORMS.VALUE :::",this.forms.value);
  //ssconsole.log("INPUTDATA :::",this.inputdata);
  //this.forms.patchValue(this.data);
  let ele=[];
  // for(let a in this.data)
  // {
  // console.log(a);
  // console.log("the data is ::: ", this.forms.value);
  // }
  ele.push(this.data);
  for(let control in ele)
  {
    this.id_data=ele[control]._id;
   // console.log("Id generated is : ",this.id_data);
  }
}
SubmitHere=function(value)
{  
  //console.log("ll",value);
  //console.log("before coping the data is :",this.data._id);
  //console.log("Id generated is : ",this.id_data);
  //console.log("the data is ::: ", this.forms.value);
  //console.log("copied data is :",this.data);
  let arr=[];
  let elements=[];
  for(let i=0;i<this.inputdata[3].options.length;i++)
  {     
    if(this.inputdata[3].options[i].selected==true)
    {
      elements.push(this.inputdata[3].options[i].value);
    }
  }
  for(let sn in this.forms.value)
  {
    if(sn==this.inputdata[3].key)
    {
      this.forms.value[sn]=elements;
      this.msg= JSON.stringify(this.forms.value[sn]);
    }
    else
    {
      this.msg = JSON.stringify(this.forms.value);     
    }
  }    
this.data._id=this.id_data;
this.data.name=this.forms.value.name;
this.data.age=this.forms.value.age;
this.data.comment=this.forms.value.comment;
this.data.Enter_hobbies_Details=this.forms.value.Enter_hobbies_Details;
this.data.qualification=this.forms.value.qualification;
//console.log("kk: : : :",this.data);
this.authData.edit(this.data).subscribe((data)=>
{
  //console.log("dddddd",data);
  this.router.navigate(['']);
  //ssalert('Data Updated !!!');
  this.authData.data=undefined;
});
}
}
