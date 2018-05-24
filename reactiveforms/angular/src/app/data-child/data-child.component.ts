import { Component, OnInit,Input }     from '@angular/core';
import { FormGroup }                   from '@angular/forms';
import { dataFormat }                  from '../dataformat'; 
import { AuthguardService }            from '../authguard.service';
import { Options } from 'selenium-webdriver/opera';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent implements OnInit {
  @Input() inputdata: dataFormat<any>;
  @Input() forms: FormGroup;
  isValid() 
  {
    return this.forms.controls[this.inputdata.key].valid; 
  }
  data=
  {
    _id:"",
    name:"",
    age:"",
    comment:"",
    Enter_hobbies_Details:"",
    qualification:""
  };
  msg;
  m;
  any:any;
 ele=[];
 a=[];
  b=[];
  e;
  aa;
  constructor( private authData:AuthguardService) { }
  
  ngOnInit()
  {




this.any=['INDIA'];
    //this.inputdata[5].id
    //console.log("inputdata is ::",this.inputdata.id);
    this.data=this.authData.data;
if(this.authData.data!=undefined)
{


  //Radio button 
  if(this.inputdata.controlType=="radio")
  {
    let op=this.inputdata['options'];
      //console.log("op : " ,op);
    for(let i=0;i<op.length;i++)
    {
      if(op[i].value==this.authData.data.qualification)
      {
        this.msg=i;
      }
    }
  }

  //for checkboxes 
  if(this.inputdata.controlType=="checkbox")
  {
      let op=this.inputdata['options'];
      let c=this.authData.data.Enter_hobbies_Details.split(",");
      //console.log("selected elements are : ",c);
      for(let i=0;i<op.length;i++)
      {
        this.a.push(op[i].value);
        //console.log(c);
        //console.log(this.authData.data.Enter_hobbies_Details);
        //console.log(op[i].value);
        // if(op[i].value==this.authData.data.Enter_hobbies_Details)
        // {
        //   this.m=i;
        //   op[i].selected=true;
        // }
      }
      //console.log("the original array was : ",this.a);
      for(let d=0;d<c.length;d++)
      {
        this.aa=this.a.indexOf(c[d],0);
        //console.log("index values of selected values are :: ",this.aa);
        op[this.aa].selected=true;
      }
  }
}
}
  checkBoxClicked(evt,data)
  {
    //this event is triggered when we will click the submit button
    //console.log("evt",evt.target);
    data.selected=evt.target.checked;
    //console.log("data selected is :",data.selected);
  }
  selectdropdown(data)
  {
   data.selected='true';
      //console.log(data);
  }
  onChange(evt,data)
  {
console.log(evt);
// for(let i=0;i<=data.length;i++)
// {
//   console.log(data[i]);
// }
  }
  
}
