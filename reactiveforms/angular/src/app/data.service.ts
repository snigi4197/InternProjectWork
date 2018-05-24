import { Injectable } from '@angular/core';
import {dataFormat} from './dataformat';
import {dataTextbox} from './data-textbox';
import {dataRadio} from './data-radio';
import {dataCheckbox} from './data-checkbox';
import {dataDropdown} from './data-dropdown';
import {dataTextarea} from './data-textarea';
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
    //  new dataTextbox
    //  (
    //    {   
    //     key: 'Comment Here',
    //     label: 'Comment',
    //     name:'comment',
    //     //required: true,
    //     value: '',
    //     order:3,
    //     type:'textbox'
    //    }
    //  ),
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
     ),
     new dataDropdown
     (
       {
         key:'nationality',
         label:'Nationality',
         name:'nationality',
         id:'nationality',
         //required: true,
         options:
         [
          {key: 'INDIA',  value: 'india',selected: false},
          {key: 'PAKISTAN',  value: 'pakistan',selected: false},
          {key: 'USA',   value: 'usa',selected: false},
          {key: 'CHINA', value: 'china',selected: false},
          {key: 'AFGANISTAN',  value: 'afganistan',selected: false},
          {key: 'DUBAI',   value: 'dubai',selected: false},
          {key: 'CANADA', value: 'canada',selected: false}
        ],
        order:6,
        type:'select'
       }
     ),
     new dataTextarea
     (
       {   
        key: 'comment',
        label: 'comment',
        name:'comment',
        //required: true,
        value: '',
        order:3,
        type:'textarea',
        rows:'9',
        cols:"90"
       }
     )
    ];
    return dataformat.sort((a, b) => a.order - b.order);

  }
}
