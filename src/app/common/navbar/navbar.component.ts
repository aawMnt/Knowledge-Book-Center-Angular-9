import { EcomCartServiceService } from './../../service/ecom-cart-service.service';
import { Router } from '@angular/router';
import { EcomLoginService } from './../../service/ecom-login.service';
import { CartItem } from './../../../../../Testng/src/app/common/cart-item';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EcomUserService } from 'src/app/service/ecom-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartBooks: number=0;
  logOut= true;
  
  constructor(private httpClientService: EcomUserService, private _service : EcomLoginService,private _router :Router,
      private _cartService:EcomCartServiceService) { }

  ngOnInit(): void {
    
     this.addCart();


    this._cartService.count.subscribe(data=>{
      this.cartBooks = data;
    })

  
  
  
  
  
  
    if(this._service.isLogin()){
     this.logOut=false;
}
    

  }

  addCart(){

    if(localStorage.getItem('cart')!= null){
      var cartCount = JSON.parse(localStorage.getItem('cart'));

      // this.cartBooks= cartCount.length;
      // console.log(cartCount.length);
 
      
    }

  }

  logOutClick(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    this._router.navigate(['admin-login']);
    location.reload();

  }




  @Output() public sidenavToggle = new EventEmitter();

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
   
  

}
