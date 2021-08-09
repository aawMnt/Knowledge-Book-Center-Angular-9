import { CustomerInfo } from './../../objClass/customer-info';
import { EcomCartServiceService } from './../../service/ecom-cart-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-view-details',
  templateUrl: './ecom-view-details.component.html',
  styleUrls: ['./ecom-view-details.component.css']
})
export class EcomViewDetailsComponent implements OnInit {
details = new CustomerInfo;
  constructor(private _activeroute:ActivatedRoute, private _cartService : EcomCartServiceService) { }

  cId=0;
  total:number=0
  ngOnInit(): void {

    this.cId = this._activeroute.snapshot.params.cId;

   this._cartService.getOrderById(this.cId).subscribe((data:any)=>{
     console.log(data);
     this.details= data;
   });


  
this.totalOrdrsIteams();
  

  }

  totalOrdrsIteams(){
    this._cartService.totalAllCarts.subscribe(data=>{
      this.total = data;
    })
  }

}
