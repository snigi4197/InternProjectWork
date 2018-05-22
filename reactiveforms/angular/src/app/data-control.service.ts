import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {dataFormat} from './dataformat';
@Injectable()
export class DataControlService {
  constructor() { }
  checkFormParameters(get_data:any)
  {
    //console.log("111111111111111111");
    let i;
    let group:any={};
    //console.log("getdata ::::::::::::::::::::::",get_data);
      get_data.forEach(data=>
        {
         // console.log("data is : ",data);
          if(data.controlType=='checkbox')
          {
          
            let fg=new FormArray([]);
          
            for(i=0;i<data.options.length;i++)
            {             
              let fc=new FormControl(data.options[i].selected);
              //ssconsole.log(data.options[i].key);
              fg.push(fc);  
            }
            group[data.key]=fg;
          }
          else         
          {
            //console.log("in else");
            group[data.name]=data.required 
                            ?
                            new FormControl(data.value||'',Validators.required)
                            :
                            new FormControl(data.value||'');
            //console.log("data is else is : ", data);
          }
        }
        );
    return new FormGroup(group); 
  }
}

