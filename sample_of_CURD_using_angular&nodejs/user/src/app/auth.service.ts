import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

public username;
private isLoggedIn;
  constructor(private http: Http) { 
    this.isLoggedIn=false;
  }

insert(user) {
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      return this.http.post('/api/insert', user, { headers: headers })
        .map(res => res.json());
}
display(user)
{
  let headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('charset', 'UTF-8');
   return this.http.post("/api/update",user,{headers:headers}).map((res:Response) => res.json());
}
viewdata(user)
{
  let headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('charset', 'UTF-8');
   return this.http.post("/api/viewinfo",user,{headers:headers}).map((res:Response) => res.json());
}
updateuser(user)
{
  let headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('charset', 'UTF-8');
   return this.http.post("/api/updateuser",user,{headers:headers}).map((res:Response) => res.json());
}
login(user)
{
  let headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('charset', 'UTF-8');
   return this.http.post("/api/login",user,{headers:headers}).map((res:Response) => res.json());
}
register(user)
{
  let headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('charset', 'UTF-8');
   return this.http.post("/api/register",user,{headers:headers}).map((res:Response) => res.json());
}

setUserLoggedIn() //for checking routing guard example
{
  this.isLoggedIn=true;
  this.username='abc';
}
getUserLoggedIn()
{
  return this.isLoggedIn;
}
}

