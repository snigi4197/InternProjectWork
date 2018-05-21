import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthguardService {

  constructor(private http: Http) { }
  a=10;
  data;
  abc()
  {
    console.log("hey");
  }
  register(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/register",user,{headers:headers}).map((res:Response) => res.json());
  }
  entry()
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.get("/api/entry",{headers:headers}).map((res:Response) => res.json());
  }
  
  displaydata(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/displaydata",user,{headers:headers}).map((res:Response) => res.json());
  }
  
  update(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/update",user,{headers:headers}).map((res:Response) => res.json());
  }
  delete(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/delete",user,{headers:headers}).map((res:Response) => res.json());
  }
  view(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/view",user,{headers:headers}).map((res:Response) => res.json());
  }
  edit(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/edit",user,{headers:headers}).map((res:Response) => res.json());
  }

}
