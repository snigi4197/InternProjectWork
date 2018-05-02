import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {dataFormat} from './dataformat';
@Injectable()
export class DataControlService {

  constructor() { }

  checkFormParameters(get_data:any)
  {
    let i;
    let group:any={};
    console.log("getdata",get_data);

      get_data.forEach(data=>
        {
          console.log("data is : "+data);
          if(data.controlType=='checkbox')
          {
            console.log("In if");
            console.log("data with options is : ");
            console.log(data.options);
            let fg=new FormArray([]);
            console.log("1");
            for(i=0;i<data.options.length;i++)
            {
              console.log("2");
              let fc=new FormControl(data.options[i].selected);
              console.log(data.options[i].key);
               fg.push(fc);  
            }
            group[data.key]=fg;
          }
          else 
          {
            console.log("in else");
            group[data.key]=data.required 
                            ?
                            new FormControl(data.value||'',Validators.required)
                            :
                            new FormControl(data.value||'');
            console.log("data is else is : "+data.value);

          }
          //this is the ternary operator
        }
        );
    return new FormGroup(group); 
  }
}

