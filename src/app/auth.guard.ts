import { Injectable } from '@angular/core';
import {  CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private auth:AuthorizationService, private router:Router){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(["/"]);
      return false;
    }
  }
}

