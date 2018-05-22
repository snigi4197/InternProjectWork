import { Injectable } from '@angular/core';
import {dataFormat} from './dataformat';
import {dataTextbox} from './data-textbox';
import {dataRadio} from './data-radio';
import {dataCheckbox} from './data-checkbox';
import {AuthguardService} from '../app/authguard.service';
@Injectable()
export class DataService
 {
   
  data={
    _id:"",
    name:"",
    age:"",
    comment:"",
    Enter_hobbies_Details:"",
    qualification:""
  };
  constructor( private auth :AuthguardService) { 

  }
    getdata()
  {

    let dataformat:dataFormat<any>[]=
    [
     new dataTextbox
     (
       {   
        key: 'Enter your Name',
        label: 'Name',
        name:'name',
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
        name:'age',
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
        name:'comment',
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
         name:'qualification',
         //required: true,
         options:
         [
          {key: 'BCA',  value: 'bca'},
          {key: 'MCA',  value: 'mca'},
          {key: 'MBA',   value: 'mba'},
          {key: 'BBA', value: 'bba'}
        ],
        order:5,
        type:'radio'
       }
     ),
     new dataCheckbox
     (
       {
          key:'Enter_hobbies_Details',
          label:'Hobbies',
          name:'hobbies',
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
