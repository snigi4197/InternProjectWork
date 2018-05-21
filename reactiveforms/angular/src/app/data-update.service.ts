import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {dataFormat} from './dataformat';
import {dataTextbox} from './data-textbox';
import {dataRadio} from './data-radio';
import {dataCheckbox} from './data-checkbox';
import {AuthguardService} from '../app/authguard.service';

@Injectable()
export class DataUpdateService {

  data={
    _id:"",
    name:"",
    age:"",
    comment:"",
    Enter_hobbies_Details:"",
    qualification:""
  };
  constructor(private authData :AuthguardService) { }

  getdata()
  {
  this.data=this.authData.data;
    console.log(this.data.name);

  
    let dataformat:dataFormat<any>[]=
    [
     new dataTextbox
     (
       {   
        key: 'Enter your Name',
        label: 'Name',
        name:'name',
        //required: true,
        value: this.data.name,
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
        value: this.data.age,
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
        value: this.data.comment,
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
          key:'Enter_hobbies_Details',
          label:'Hobbies',
          name:'hobbies',
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
