import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
private isLoggedIn;
  constructor(private http: Http) {  }
  
  entry(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.post("/api/entry",user,{headers:headers}).map((res:Response) => res.json()); 
  }
  display()
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.get("/api/display",{headers:headers}).map((res:Response) => res.json()); 
  }



}