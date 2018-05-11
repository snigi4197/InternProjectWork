import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Http, HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RouterModule,Routes} from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
item;
rform;
  constructor(private auth:AuthService,private http:Http,private router: Router) { }
  getdata={
    id:"",
    hostname:"",
    loopback:""
  };
  ngOnInit() 
  { 
    this.item=this.auth.value();
    console.log("item is :",this.item);
    this.getdata=this.item;
    console.log("data is: ",this.getdata);


    this.rform=new FormGroup(
      {
        id:new FormControl(""), 
        hostname:new FormControl(""),
        loopback:new FormControl("")
      }
    );
  }
  onSubmit=function(form)
  {
    form['id']=this.getdata.id;
    console.log(form);
      this.auth.update(form).subscribe((data)=>{
      if (data.status) 
      {
        console.log(data);
        this.router.navigate(['/']);
      }
        else{
          console.log(data);
          console.log("error"+data.message)
        }
       
     });
   }
  


}
