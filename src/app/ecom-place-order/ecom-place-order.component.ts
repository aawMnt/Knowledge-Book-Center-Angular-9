import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CustomerPyment } from './../objClass/customer-pyment';
import { EcomCartServiceService } from './../service/ecom-cart-service.service';
import { CustomerInfo } from './../objClass/customer-info';
import { BookCart } from './../objClass/book-cart';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ecom-place-order',
  templateUrl: './ecom-place-order.component.html',
  styleUrls: ['./ecom-place-order.component.css']
})
export class EcomPlaceOrderComponent implements OnInit {
  cart: BookCart[];
  getDetails: BookCart[] = [];
  custInfo: CustomerInfo = new CustomerInfo();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  payment: CustomerPyment[] = []
  done = false;
  cardPayment = false;
  cod = false;
  total: number = 0
  qnt: number = 0;
  selectMode = true;
  visa = false;
  debit = false;
  cradit = false
  cardForm = true;


  constructor(private _formBuilder: FormBuilder, private _cartService: EcomCartServiceService, private _router: Router) {
    const product = JSON.parse(localStorage.getItem('cart'));
    this.cart = product;
    product.forEach((product) => {
      this.total += product.totalPrice;
      this.qnt += product.qnt
    });
  }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({

      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

    });

    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern("^[1-9][0-9]{5}$")]],
    });

    this.thirdFormGroup = this._formBuilder.group({


      cardType: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNo: ['', [Validators.required, Validators.pattern("^[1-9][0-9]{15}$")]],
      cvvNo: ['', [Validators.required, Validators.pattern("^[1-9][0-9]{2}$"), Validators.maxLength(3)]],
      expiryDate: ['']


    });




  }

  cardMode(event) {

    // const cardType = event.target.value;
    // this.thirdFormGroup.get('cardType').setValue(cardType);

    if (event.target.value == 'VISA' || 'MASTER CARD') {
      this.cardPayment = true;
      this.selectMode = false;
      this.debit = true;
      this.cod = false;
      this.cradit = false;
    }
    if (event.target.value == 'CRADIT CARD') {
      this.cardPayment = true;
      this.selectMode = false;
      this.debit = false;
      this.cod = false;
      this.cradit = true;
    }
   

  }






  confOrder() {



    this.custInfo.firstname = this.firstFormGroup.get('firstname').value;
    this.custInfo.lastname = this.firstFormGroup.get('lastname').value
    this.custInfo.email = this.firstFormGroup.get('email').value
    this.custInfo.phoneNo = this.firstFormGroup.get('phoneNo').value
    this.custInfo.address = this.secondFormGroup.get('address').value;
    this.custInfo.city = this.secondFormGroup.get('city').value;
    this.custInfo.pin = this.secondFormGroup.get('pin').value;
    this.custInfo.payment.cardType = this.thirdFormGroup.get('cardType').value;
    this.custInfo.payment.cardName = this.thirdFormGroup.get('cardName').value;
    this.custInfo.payment.cardNo = this.thirdFormGroup.get('cardNo').value;
    this.custInfo.payment.cvvNo = this.thirdFormGroup.get('cvvNo').value;
    this.custInfo.payment.expiryDate = this.thirdFormGroup.get('expiryDate').value;
    this.custInfo.product = JSON.parse(localStorage.getItem('cart'));

    //  console.log(this.custInfo);
    this._cartService.checkOut(this.custInfo).subscribe(data => {
      // console.log(data);
      this.firstFormGroup.reset();
      this.secondFormGroup.reset();
      this.thirdFormGroup.reset();
      localStorage.removeItem('cart');
      this._cartService.ItemCount.next(0);

      Swal.fire('success', 'Thank You For Purchasing items, Your item is Delivered in 3 to 10 Days', 'success').then(resp => {
        if (resp.isConfirmed) {
          this._router.navigate(['/shop']);
        }
      });

    },error=>{
      Swal.fire("Error","Server Not Responding",'error');
    });
  }

  next() {

    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {

      this.done = true;




    }

  }



  cardType: any = [
    { id: 1, card: "VISA" },
    { card: "MASTER CARD" },
    { card: "CRADIT CARD" },

  ]






}
