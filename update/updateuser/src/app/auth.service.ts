import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

public username;

private isLoggedIn;
  constructor(private http: Http) { 
    this.isLoggedIn=false;
  }
  

  setUserLoggedIn() //for checking routing guard example
  {
    this.isLoggedIn=true;

    this.username=localStorage.getItem("GetTheEmail");
    
    console.log("hey the value of toke is "+this.username);
    return this.username;
  }
 
 
  
  /*
  public isAuthenticated():boolean
  {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
*/
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

demo(user)
{
  let headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('charset', 'UTF-8');
   return this.http.post("/api/demo",user,{headers:headers}).map((res:Response) => res.json());
}
test(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.post("/api/test",user,{headers:headers}).map((res:Response) => res.json());
  }

  test2()
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.post("/api/test2",{headers:headers}).map((res:Response) => res.json()); 
  }
 
  p(user)
  {
    let headers=new Headers();
    headers.append('content-type','application/json');
    headers.append('charset','UTF-8');
    return this.http.post("/api/p",user,{headers:headers}).map((res:Response)=>res.json);
  }
 

  nsodevices()
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.get("/api/nsopromise",{headers:headers}).map((res:Response) => res.json());
  }
   a=10;
  example()
  {
    console.log("the value of a is "+this.a);
  }


}