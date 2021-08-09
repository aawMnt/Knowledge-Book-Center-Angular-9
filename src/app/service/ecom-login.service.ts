import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EcomLoginService {

  constructor(private http: HttpClient) { }

  serverUrl = environment.baseUrl;


  // *********************************************generate tiken from back-end*******************************************************
  public Token(loginEcom: any) {
    return this.http.post(this.serverUrl + 'generate-token', loginEcom);
  }


  // *************************************************get token from localstorage*********************************************************
  public getToken() {
    return localStorage.getItem('token');
  }

  // **************************************************save genreted token in local storage************************************************
  public LoginUser(token) {
    localStorage.setItem("token", token);
    // this.loginStatusSub.next(true);
    return true;
  }

  // ********************************************************** find current user from back end******************************************
  public currentUser() {
    return this.http.get(this.serverUrl + 'current-user');
  }
  // ***********************************************************for logout************************************************
  public Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //  *********************************************user save in local storage**************************************************
  public setUserDetail(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  // *****************************************************get user*****************************************************************
  public getuser() {
    let UserStr = localStorage.getItem('user');
    if (UserStr != null) {
      return JSON.parse(UserStr);
    } else {
      this.Logout();
      return null;
    }
  }
  // *********************************************************user role************************************************************************
  public userRole() {
    let user = this.getuser()
    return user.authorities[0].authority;
  }
  // ***********************************************************************************************************************************

  //user is login or not
  public isLogin() {
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    else {
      return true;
    }
  }

}
