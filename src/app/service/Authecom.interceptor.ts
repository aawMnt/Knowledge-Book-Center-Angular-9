
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EcomLoginService } from "./ecom-login.service";


@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginservice :  EcomLoginService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //add jwt token
    let authReq=req;
      const token = this.loginservice.getToken();
      console.log('inside intersepter');
      if(token!=null){
         authReq= authReq.clone({setHeaders:{Authorization:`Bearer ${token}`}, // " ` `  " is IMP for Authentication
        
        });
      }
      return next.handle(authReq);
    }

}

export const authInterceptorProviders=[

    {
        provide :HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    }
];