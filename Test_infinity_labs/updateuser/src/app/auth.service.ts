import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
private isLoggedIn;
  constructor(private http: Http) {  }
  i;
  entry(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.post("/api/entry",user,{headers:headers}).map((res:Response) => res.json()); 
  }

  deletes(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.post("/api/delete",user,{headers:headers}).map((res:Response) => res.json()); 
  }


  display()
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.get("/api/display",{headers:headers}).map((res:Response) => res.json()); 
  }
  update(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.post("/api/update",user,{headers:headers}).map((res:Response) => res.json()); 
  }
  view(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.post("/api/view",user,{headers:headers}).map((res:Response) => res.json()); 
  }
  delete(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
     return this.http.post("/api/delete",user,{headers:headers}).map((res:Response) => res.json()); 
  }
value()
{

return this.i;

}
}