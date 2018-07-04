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
  console.log("data is :::::::::::::::::::::::",this.data);

    console.log("INPUTDATA : ",this.inputdata);
    this.forms= this.datacontrol.checkFormParameters(this.inputdata);
    console.log("FORMS :::: ",this.forms);
    console.log("the data is ::: ", this.forms.value);


    for(let a in this.data)
    {
      console.log(a);
      this.forms.value[a]=this.data[a];
      console.log("the data is ::: ", this.forms.value);
    }
    console.log("the  outside  is ::: ", this.forms.value);

  for(let control in this.inputdata)
    {
      if(this.inputdata[control].name=="name")
      {
       this.inputdata[control].value=this.data.name;
      }
      if(this.inputdata[control].name=="age")
      {
       this.inputdata[control].value=this.data.age;
      }
      if(this.inputdata[control].name=="comment")
      {
       this.inputdata[control].value=this.data.comment;
      }
      if(this.inputdata[control].name=="qualification")
      {
        console.log(this.inputdata[control]['options'][0].value);
        ////start from here!!!

        if(this.inputdata[control]['options'][0].value==this.data.qualification)
        {
          console.log("hey");
        }
       this.inputdata[control].value=this.data.qualification;
      }
      if(this.inputdata[control].name=="Enter_hobbies_Details")
      {
       this.inputdata[control].value=this.data.Enter_hobbies_Details;
      }
    }
    console.log("UPDATED ::::: ",this.data);
   }

SubmitHere=function(value)
{
    console.log("UPDATED DATA ::::: ",this.inputdata);

}


  SSubmitHere=function(value)
  {
    this.data=this.authData.data;
    console.log("DATA ::",this.data._id);
    console.log(value);
    console.log("inputdata ::::::",this.inputdata);
    let checkelements:any[];
    let elements=[];
    let ele=[];
    for(let control in this.inputdata)
    {
      if(this.inputdata[control].controlType=="checkbox")
      {
        let op=this.inputdata[control]['options'];
        for(let i=0;i<op.length;i++)
        {
          if(op[i].selected==true)
          {
            ele.push(op[i].value);
          }
        }
        this.forms.value[this.inputdata.key]=ele;
        let a=this.forms.value[this.inputdata.key];
        this.msg=JSON.stringify(a);
      }
    }  
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
        this.message = JSON.stringify(this.forms.value[sn]);
      }
      else
      {
        this.message = JSON.stringify(this.forms.value);     
      }
    }
    console.log("gg ",this.forms.value);
    this.authData.displaydata(value).subscribe((data)=>
    {
      console.log("Using sql database");
      console.log("data is ",data);
      this.show();
    });
  }   
}
