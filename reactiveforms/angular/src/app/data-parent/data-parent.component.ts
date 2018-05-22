import { Component, OnInit,Input }            from '@angular/core';
import {FormControl , Validators}             from '@angular/forms';
import { AuthguardService }                   from '../authguard.service';
import { FormGroup,ReactiveFormsModule }       from '@angular/forms';
import { dataFormat }                         from '../dataformat'; 
import { DataControlService }                 from '../data-control.service';
import { Http} from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrls: ['./data-parent.component.css'],
  providers:[DataControlService]
})
export class DataParentComponent 
{
  @Input() inputdata: dataFormat<any>[] = [];
  forms:FormGroup;
  message="";
  msg="";
  list;
 i;
  constructor(private datacontrol:DataControlService,private authData:AuthguardService,private router: Router) {}
  ngOnInit()
  {    
    //sconsole.log("INPUTDATA : ",this.inputdata);
    this.forms= this.datacontrol.checkFormParameters(this.inputdata);
    //console.log("FORMS :::: ",this.forms);
    this.show();    
  }
  show()
{
  this.authData.entry().subscribe((data)=>
  {
    //console.log("display data using mongodb");
    //console.log(data);
    this.list=data;
    //console.log("dataview ",this.list);
  });
}
  SubmitHere=function(value)
  {
    //console.log(value);
    this.authData.abc();
    //console.log("jjj",this.inputdata);
    let checkelements:any[];
    let elements=[];
    let ele=[];
   //USING THE RUN TIME CONTROL METHOD
   
    for(let control in this.inputdata)
    {
      if(this.inputdata[control].controlType=="checkbox")
      {
        let op=this.inputdata[control]['options'];
        //console.log("op : " ,op);
        for(let i=0;i<op.length;i++)
        {
          if(op[i].selected==true)
          {
            ele.push(op[i].value);
             //if we not add this ( . key ) then it will show 
              //     all full value of inputdata ie ( key , value and selected  value)
          }
        }
        this.forms.value[this.inputdata.key]=ele;
        //console.log(this.forms.value[this.inputdata.key]);
        let a=this.forms.value[this.inputdata.key];
        this.msg=JSON.stringify(a);
      }
    }
  // USING THE MANUAL METHOD

    for(let i=0;i<this.inputdata[3].options.length;i++)
    {     
       if(this.inputdata[3].options[i].selected==true)
      {
        elements.push(this.inputdata[3].options[i].value);
        //if we not add this ( . key ) then it will show 
        //all full value of inputdata ie ( key , value and selected  value)
      }
    }
    for(let sn in this.forms.value) // hell important to understand 
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
    //console.log("gg ",this.forms.value);
    this.authData.displaydata(value).subscribe((data)=>
    {
      //console.log("Using sql database");
      //console.log("data is ",data);
      this.show();
    });

    }   
    // update(value)
    // {
    //   this.i=value;
    //   //console.log("data to be updated is: ",value);
    //   this.authData.data=this.i;
    //   //console.log("in update funtion :",this.authData.data);
    //   this.router.navigate(['/update']);
    // }
    edit(value)
    {
      //console.log("data to be updated is: ",value);
      this.authData.data=value;
      //console.log("in update funtion :",this.authData.data);
      this.router.navigate(['/edit']);
    }
    delete(value)
    {
      //console.log("data to be deleted is: ",value);
      this.authData.delete(value).subscribe((data)=>{
        //console.log("delete data is :",data);
      });
      this.show();
    }
}
