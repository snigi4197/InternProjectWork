import { Component, OnInit } from '@angular/core';
import {AuthguardService} from '../authguard.service';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-postservice',
  templateUrl: './postservice.component.html',
  styleUrls: ['./postservice.component.css']
})
export class PostserviceComponent implements OnInit {
data:any={
  name:'abc',
  age:'def'
}
  constructor(private http:Http, private auth:AuthguardService) { }

  ngOnInit() {
  }
  // insert()
  // {
  //   this.auth.insertData().subscribe( res=>this.data= res );
    
  // }
} 
