import { Injectable } from '@angular/core';
import {dataFormat} from './dataformat';
import {dataTextbox} from './data-textbox';
import {dataRadio} from './data-radio';
import {dataCheckbox} from './data-checkbox';
@Injectable()
export class DataService
 {

  constructor() { }

  getdata()
  {
    let dataformat:dataFormat<any>[]=
    [
     new dataTextbox
     (
       {   
        key: 'Enter your Name',
        label: 'Name',
        //required: true,
        value: '',
        order:1,
        type:'textbox'
       }
     ),
     new dataTextbox
     (
       {   
        key: 'Enter your Age',
        label: 'Age',
        value: '',
        order:2,
        //required: true,
        type:'textbox'
       }
     ),
     new dataTextbox
     (
       {   
        key: 'Comment Here',
        label: 'Comment',
        //required: true,
        value: '',
        order:3,
        type:'textbox'
       }
     ),
     new dataRadio
     (
       {
         key:'Choose your Qualification',
         label:'Subject',
         //required: true,
         options:
         [
          {key: 'BCA',  value: 'BCA'},
          {key: 'MCA',  value: 'MCA'},
          {key: 'MBA',   value: 'MBA'},
          {key: 'BBA', value: 'BBA'}
        ],
        order:5,
        type:'radio'
       }
     ),
     new dataCheckbox
     (
       {
          key:'Enter hobbies Details',
          label:'Hobbies',
          //required: true,
          order:4,
          type:'checkbox',
          options:
          [
           {key: 'GAMES',  value: 'games',selected: false},
           {key: 'DANCING',  value: 'dancing',selected: false},
           {key: 'READING',   value: 'reading ',selected: false},
           {key: 'TRAVELLING', value: 'travelling',selected: false}
         ]
       }
     )     
    ];
    return dataformat.sort((a, b) => a.order - b.order);

  }
}
