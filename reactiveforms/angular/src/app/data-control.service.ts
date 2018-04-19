import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {dataFormat} from './dataformat';
@Injectable()
export class DataControlService {

  constructor() { }

  checkFormParameters(get_data:dataFormat<any>[])
  {
      let group:any={};
      get_data.forEach(
        data=>
        {
          //this is the ternary operator
          group[data.key]=data.required 
                          ? 
                          new FormControl(data.value||'',Validators.required)
                          :
                          new FormControl(data.value||'');

        }
      );
  }
}