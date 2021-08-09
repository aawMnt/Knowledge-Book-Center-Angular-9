import { environment } from '../../environments/environment';
import { BookCart } from './../objClass/book-cart';
import { HttpClient } from '@angular/common/http';
import { CustomerInfo } from './../objClass/customer-info';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EcomCartServiceService {

  bookcartIteas: CustomerInfo[] = [];
  totalAllCarts: Subject<number> = new BehaviorSubject<number>(0);

  ServerUrl = environment.baseUrl;

  public ItemCount = new BehaviorSubject(0);
  count: Observable<number> = this.ItemCount.asObservable();
  private shoppingCart = new BehaviorSubject([]);
  cart = this.shoppingCart.asObservable();



  constructor(private _http: HttpClient) {
    //this is for debugin off add cart show 0 after reload site
    let isEmptyCart: boolean = localStorage.getItem('cart') == null;
    this.updateCartItemCount(isEmptyCart ? 0 : JSON.parse(localStorage.getItem('cart')).length);
    this.updateShoppingCart(isEmptyCart ? [] : JSON.parse(localStorage.getItem('cart')));
  }



  updateCartItemCount(count: number) {
    this.ItemCount.next(count);

  }
  updateShoppingCart(cartItems: BookCart[]) {
    this.shoppingCart.next(cartItems);
  }

  checkOut(custInfo: CustomerInfo): Observable<CustomerInfo> {
    return this._http.post<CustomerInfo>(this.ServerUrl + 'purches/buy', custInfo);
  }

  getAllOrders(): Observable<CustomerInfo[]> {
    return this._http.get<CustomerInfo[]>(this.ServerUrl + 'purches/getInfo')
  }
  deleteOrderView(id: number) {
    return this._http.delete(this.ServerUrl + 'purches/deleteOrder/' + id);
  }

  getOrderById(id: number): Observable<CustomerInfo[]> {
    return this._http.get<CustomerInfo[]>(this.ServerUrl + 'purches/getById/' + id)
  }


 

}
