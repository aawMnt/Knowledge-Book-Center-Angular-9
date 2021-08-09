import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-admin-sidebar',
  templateUrl: './ecom-admin-sidebar.component.html',
  styleUrls: ['./ecom-admin-sidebar.component.css']
})
export class EcomAdminSidebarComponent implements OnInit {

  constructor(private _router :Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    this._router.navigate(['admin-login']);
    location.reload();

  }
}
