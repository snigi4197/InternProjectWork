import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
@Injectable()
export class AuthguardService {

  apiUrl = environment.API_URL;

  constructor(private http: Http) { }
  a=10;
  data;
  abc()
  {
    //console.log("hey");
  }
  register(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post(`${this.apiUrl}/api/register`,user,{headers:headers}).map((res:Response) => res.json());
  }
  entry()
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.get(`${this.apiUrl}api/entry`,{headers:headers}).map((res:Response) => res.json());
  }
  
  displaydata(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post(`${this.apiUrl}api/displaydata`,user,{headers:headers}).map((res:Response) => res.json());
  }
  
  update(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post(`${this.apiUrl}api/update`,user,{headers:headers}).map((res:Response) => res.json());
  }
  delete(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post(`${this.apiUrl}api/delete`,user,{headers:headers}).map((res:Response) => res.json());
  }
  view(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post(`${this.apiUrl}view`,user,{headers:headers}).map((res:Response) => res.json());
  }
  edit(user)
  {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post(`${this.apiUrl}edit`,user,{headers:headers}).map((res:Response) => res.json());
  }

  // insertData()
  // {
  //   return this.http.post("localhost:9000/post",this.data).map((res:Response)=> res.json());
  // }


}
