import { MatSnackBar } from '@angular/material/snack-bar';
import { EcomCartServiceService } from './../service/ecom-cart-service.service';
import { BookCart } from './../objClass/book-cart';
import { Router } from '@angular/router';
import { EcomUserService } from 'src/app/service/ecom-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {

  noCartIteams = false;
  getDetails: BookCart[] = [];
  cartNum: any = 0;
  total: number = 0;

  constructor(private _router: Router,
    private httpClientService2: EcomCartServiceService, private _snk: MatSnackBar) { }

  ngOnInit(): void {
    this.httpClientService2.cart.subscribe(a => this.getDetails = a);
    // this.loadCard();
    this.totalAllCart();
    this.cartDetails();


  }

  cartDetails() {
    if (localStorage.getItem('cart') == null) {
      this.noCartIteams = true;

    }
    if (localStorage.getItem('cart')) {
      this.getDetails = JSON.parse(localStorage.getItem('cart'));
      // console.log(this.getDetails);
    }




  }

  placeOrder() {
    this._router.navigate(['/placeorder']);


  }

  updateIteam(type, id) {

    if (type == 1) {
      this.getDetails.forEach((element, index) => {
        if (element.id == id && element.qnt != 4) {
          this.getDetails[index].qnt = element.qnt + 1;
          this.getDetails[index].totalPrice = element.qnt * element.price;
        }
      });
    } else {
      this.getDetails.forEach((element, index) => {
        if (element.id == id && element.qnt != 1) {
          this.getDetails[index].qnt = element.qnt - 1;
          this.getDetails[index].totalPrice = element.qnt * element.price;
        }
      });

    }
    localStorage.setItem('cart', JSON.stringify(this.getDetails));
    this.totalAllCart();
  }



  // plusIteam(id, qnt) {

  //   for (let i = 0; i < this.getDetails.length; i++) {
  //     if (this.getDetails[i].id === id) {
  //       if (qnt != 5) {
  //         this.getDetails[i].qnt = parseInt(qnt) + 1;
  //       }

  //     }
  //   }
  //   localStorage.setItem('cart', JSON.stringify(this.getDetails));
  //   this.loadCard();
  // }


  // minusIteam(id, qnt) {
  //   for (let i = 0; i < this.getDetails.length; i++) {
  //     if (this.getDetails[i].id === id) {

  //       if (qnt != 1) {
  //         this.getDetails[i].qnt = parseInt(qnt) - 1;
  //       }

  //     }
  //   }
  //   localStorage.setItem('cart', JSON.stringify(this.getDetails));
  //   this.loadCard();

  // }

  // totla: number = 0;
  // loadCard() {

  //   if (localStorage.getItem('cart')) {
  //     this.getDetails = JSON.parse(localStorage.getItem('cart'));
  //     this.totla = this.getDetails.reduce(function (acc, val) {

  //       return acc + (val.price * val.qnt);
  //     }, 0);
  //   }

  // }

  totalAllCart() {
    this.total = 0;
    this.getDetails.forEach((element) => {
      this.total = this.total + (element.price * element.qnt)

    })

  }



  removeAll() {

    localStorage.removeItem('cart');

    this.ngOnInit();
    this.total = 0;
    this.httpClientService2.ItemCount.next(this.total);

  }

  romoveSingal(id: number) {

    this.getDetails = this.getDetails.filter(a => a.id != id);
    localStorage.setItem('cart', JSON.stringify(this.getDetails));
    this.httpClientService2.updateCartItemCount(this.getDetails.length);

    if (this.getDetails.length == 0) {
      this.noCartIteams = true;
    }
    this.httpClientService2.updateShoppingCart(this.getDetails);
    this.totalAllCart();
    this._snk.open("Iteam Remove From Cart", "", {
      duration: 2000,
    })



    // console.log(id);
    // if (localStorage.getItem('cart')) {
    //   this.getDetails = JSON.parse(localStorage.getItem('cart'));
    //   for (let i = 0; i < this.getDetails.length; i++) {
    //     if (this.getDetails[i].id === id) {
    //       this.getDetails.splice(i, 1);
    //       localStorage.setItem('cart', JSON.stringify(this.getDetails));
    //       //  this. loadCard();
    //       this.cartNumfun();


    //     }
    //   }
    // }
  }

  // cartNumfun() {
  //   var cartValue = JSON.parse(localStorage.getItem('cart'));
  //   this.cartNum = cartValue.length;
  //   this.httpClientService.cartSubject.next(this.cartNum);

  // }

}
