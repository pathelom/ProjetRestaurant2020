import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  //routeService:Router;

  constructor(private routeService:Router){}

  canActivate(route:ActivatedRouteSnapshot,stat:RouterStateSnapshot){
    // stat.url pour sauvegarder l'url de la page demander
    if(window.localStorage.getItem('token')){
      return true;
    }
    this.routeService.navigate(['login/']);
    return false;
  }
}
