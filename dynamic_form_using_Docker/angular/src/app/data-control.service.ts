import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {dataFormat} from './dataformat';
import { AuthguardService }  from './authguard.service';

@Injectable()
export class DataControlService {
  constructor(private authData:AuthguardService) { }
  prevdata={
    _id:"",
    name:"",
    age:"",
    comment:"",
    Enter_hobbies_Details:"",
    qualification:""
  };
  
  checkFormParameters(get_data:any)
  {
    this.prevdata=this.authData.data;
    let i;
    let group:any={};
      get_data.forEach(data=>
        {
          //console.log("data is: : : ",data);
          if(data.controlType=='checkbox')
          {
            let fg=new FormArray([]);
            for(i=0;i<data.options.length;i++)
            {             
              let fc=new FormControl(data.options[i].selected);
              //console.log(data.options[i].key);
              fg.push(fc);  
            }
            group[data.key]=fg;
          }
          else         
          {
          if(this.prevdata==undefined)
            {
              group[data.name]=data.required 
                            ?
                            new FormControl(data.value||'',Validators.required)
                            :
                            new FormControl(data.value||'');
            } 
            else
            {
            for(let a in this.prevdata)
            {
              if(data.name==a)
              {
                //console.log(this.prevdata[a]);
                group[data.name]=new FormControl(data.value||this.prevdata[a]);
              }
              
            }
            }
            
          }
        }
        );
    return new FormGroup(group); 
  }
}