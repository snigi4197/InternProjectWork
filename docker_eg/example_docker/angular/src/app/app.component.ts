import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// Import rxjs map operator
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit 
{
  title = 'app works!';
  api="http://localhost:7777";
  people: any[] = [];
  constructor(private http: Http) {}
  ngOnInit() 
  {  }
  getall(name,age)
  {
    this.http.post('${this.api}/','{name,age}')
    .map(res=>res.json())
    .subscribe();
  }
}