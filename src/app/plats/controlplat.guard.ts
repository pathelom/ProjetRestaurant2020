import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class ControlplatGuard implements CanActivate  {

  constructor(private router:Router,private services:UsersService){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    this.services.redirectUrl=state.url;
    if(window.localStorage.getItem('token')){
      return true;
    }
    this.router.navigate(['login'])
    return false;

  }
  
}
