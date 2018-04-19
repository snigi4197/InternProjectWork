import { Injectable } from '@angular/core';
import {dataFormat} from './dataformat';
import {dataTextbox} from './data-textbox';
@Injectable()
export class DataService {

  constructor() { }

  getdata()
  {
    let dataformat:dataFormat<any>[]=
    [
     new dataTextbox
     (
       {   
        key: 'name',
        label: 'name',
        value: 'snigdha',
        required: true,
       }
     ),
     new dataTextbox
     (
       {   
        key: 'age',
        label: 'age',
        value: '23',
        required: true,
       }
     ),
     new dataTextbox
     (
       {   
        key: 'comment',
        label: 'comment',
        value: ''
       }
     )
    ];

  }
}
