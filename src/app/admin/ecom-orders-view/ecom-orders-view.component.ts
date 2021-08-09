import { Router } from '@angular/router';
import { BookCart } from './../../objClass/book-cart';
import { CustomerInfo } from './../../objClass/customer-info';
import { EcomCartServiceService } from './../../service/ecom-cart-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ecom-orders-view',
  templateUrl: './ecom-orders-view.component.html',
  styleUrls: ['./ecom-orders-view.component.css']
})
export class EcomOrdersViewComponent implements OnInit {
  orders: CustomerInfo[] = [];
  totalProducts = 0;
  // value;
  theproduct: BookCart[] = []
  total;
  itemsPerPage =2
  currentPage=1;


  constructor(private _cartService: EcomCartServiceService, private _router: Router) {

    const pro = this.orders;
    pro.forEach((product2) => {
      this.total = product2.product;
    })

  }

  ngOnInit(): void {

    // this.totalAllCartValue();

    this.getAll();
  }

  totalAllCartValue() {
    this.totalProducts = this.orders.length;
    this.total = 0;
    for (let i = 0; i < this.totalProducts; i++) {
      this.total += this.totalProducts[i].product[i].totalPrice;
    }



  }





  getAll() {
    this._cartService.getAllOrders().subscribe(data => {
      this.orders = data;
      //  this.totalAllCartValue(this.orders);
      // console.log(data);
      // this.totalAllCartValue();



    });
  }

  deleteOrder(id) {


    Swal.fire({
      title: 'Do you want to Delete Customer Information?',
      showDenyButton: true,
      showCancelButton: true,
      icon: 'question',
      confirmButtonText: `Delete Customer Info`,
      denyButtonText: `Don't Delete`,
    }).then((result) => {

      if (result.isConfirmed) {
        this._cartService.deleteOrderView(id).subscribe(data => {
          // console.log("delete")
          this.getAll();
        })
        Swal.fire('Delete!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Customer info is Not Deleted', '', 'info')
      }
    })



  }

  viewDetails(cId) {
    this._router.navigate(['/admin-dash/viewDetails', cId])

  }


}
function totalCart(totalCart: any) {
  throw new Error('Function not implemented.');
}

