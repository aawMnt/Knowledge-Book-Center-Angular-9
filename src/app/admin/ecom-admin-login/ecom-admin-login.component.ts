import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EcomLoginService } from './../../service/ecom-login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-admin-login',
  templateUrl: './ecom-admin-login.component.html',
  styleUrls: ['./ecom-admin-login.component.css']
})
export class EcomAdminLoginComponent implements OnInit {

  loginEcom: FormGroup;

  constructor(private formBulder: FormBuilder, private loginService: EcomLoginService,
    private _router: Router, private _snk: MatSnackBar) { }

  ngOnInit(): void {

    this.loginEcom = this.formBulder.group({

      username: "",
      password: "",

    });
  }






  loginClick() {

    this.loginService.Token(this.loginEcom.value).subscribe((data: any) => {

      // console.log(data);

      this.loginService.LoginUser(data.token);

      this.loginService.currentUser().subscribe(userData => {
        this.loginService.setUserDetail(userData);
        // console.log(userData);
        if (this.loginService.userRole() == 'ADMIN') {
          this._router.navigate(['admin-dash']).then(r => {
            location.reload();
          });
        } else {
          this.loginService.Logout();
        }

      });
    }, (error) => {
      this._snk.open("Invalid Username or Password", "", {
        duration: 2000,
        
      });
    })


  }

}
