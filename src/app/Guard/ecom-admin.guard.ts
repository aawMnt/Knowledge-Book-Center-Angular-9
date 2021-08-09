import { EcomLoginService } from './../service/ecom-login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomAdminGuard implements CanActivate {
  constructor(private _loginservice:EcomLoginService,private _router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
     if(this._loginservice.isLogin() && this._loginservice.userRole()=='ADMIN')
   {
    return true;
   }
   this._router.navigate(['admin-login'])
   return false;
     
  }
  
}
