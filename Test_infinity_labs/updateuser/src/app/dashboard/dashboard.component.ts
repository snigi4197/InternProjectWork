import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Http, HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RouterModule,Routes} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
form;
list;
a;
  constructor(private auth:AuthService,private http:Http,private router: Router) { }

  ngOnInit() 
  {
    this.form=new FormGroup(
      {
        hostname:new FormControl(""),
        loopback:new FormControl("")
      }
    );
    console.log(this.form);
   this.getdata();
  }
  getdata()
  {
    this.auth.display().subscribe((data)=>
    {
      if(data.status)
      {
        this.list=data.data;
        console.log("kk",this.list);
       
      }
    });
  }
  onSubmit=function(value)
  {
    console.log(value);
   this.auth.entry(value).subscribe((data)=>
  {
    console.log(value);
    this.getdata();
  });
  }
  edit(i)
  {
    this.a=i;
    console.log("mm",this.a);
    this.auth.i=this.a;
    this.router.navigate(['/update']);
  }
  delete(i)
  {
    this.a=i.id;
    console.log("mm",this.a);
    let id = this.a;
    this.auth.deletes(i).subscribe((data)=>
    {
      console.log(data);
      this.getdata();
    });
    console.log("bye");
  }
}