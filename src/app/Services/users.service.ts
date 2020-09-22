import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private backend:HttpClient) { }
  redirectUrl: string;
  isAuth: boolean;
  url = "http://127.0.0.1:1337";

  login(data:{email:string, password:string}): Observable<any>{
    return this.backend.post(this.url+'/auth/local',data).pipe();
  }

  register(data:{identifier:string, email: string, password:string}){
    return this.backend.post(this.url+'/auth/local/register',data).pipe();
  }
}
