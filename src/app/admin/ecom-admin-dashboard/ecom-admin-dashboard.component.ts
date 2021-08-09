import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-admin-dashboard',
  templateUrl: './ecom-admin-dashboard.component.html',
  styleUrls: ['./ecom-admin-dashboard.component.css']
})
export class EcomAdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onbeforeunload = function() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return '';
    };
  }

}
