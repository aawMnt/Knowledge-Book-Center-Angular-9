import { EcomCartServiceService } from './../../service/ecom-cart-service.service';
import { EcomUserService } from './../../service/ecom-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-admin-home',
  templateUrl: './ecom-admin-home.component.html',
  styleUrls: ['./ecom-admin-home.component.css']
})
export class EcomAdminHomeComponent implements OnInit {
  totalIteams = 0;
  totalCust = 0;
  totalOrder = 0;
  constructor(private _service: EcomUserService, private _service2: EcomCartServiceService) { }

  ngOnInit(): void {

    this.totalCartsinSite();
    this.totalCustomer();

  }

  totalCartsinSite() {
    this._service.getBooks().subscribe(data => {

      this.totalIteams = data.length;
    });

  }

  totalCustomer() {
    this._service2.getAllOrders().subscribe(data => {

      this.totalCust = data.length;
      this.totalOrder = data.length;
    })
  }

}
