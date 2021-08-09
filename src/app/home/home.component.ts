import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../objClass/book';
import { BookCart } from '../objClass/book-cart';
import { EcomCartServiceService } from '../service/ecom-cart-service.service';
import { EcomUserService } from '../service/ecom-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p: any;
  books: Array<Book>;
  booksRecieved: Array<Book>;
  cartBooks: any;
  qnt: number;
  total: number = 0;
  searchTitle;

  iteamCart: any = [];
  cartNum: number = 0;


  constructor(private router: Router, private httpClientService: EcomUserService, private _cartService: EcomCartServiceService) { }


  ngOnInit() {
    this.httpClientService.getBooks().subscribe(
      response => {
        this.handleSuccessfulResponse(response)
      }
    );

    this.qnt = 1;
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.books = new Array<Book>();
    //get books returned by the api call
    this.booksRecieved = response;
    for (const book of this.booksRecieved) {

      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.name = book.name;
      //populate retrieved image field so that book image can be displayed
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.price = book.price;
      bookwithRetrievedImageField.picByte = book.picByte;
      //  bookwithRetrievedImageField.qnt = book.qnt;
      this.books.push(bookwithRetrievedImageField);
    }


  }






  addToCart(bookId) {


    //  console.log(bookId);

    let product: BookCart;



    this.httpClientService.getElementByBookId(bookId).subscribe(data => {
      // console.log(data);

      product = data as BookCart;
      product.qnt = this.qnt;
      product.totalPrice = this.qnt * product.price;

      //  product.picByte='data:image/jpeg;base64,' + product.picByte;

      let cart: BookCart[] = JSON.parse(localStorage.getItem('cart'));
      if (cart == null) {
        cart = [];
        cart.push(product);
      } else {
        let cuurentProduct = cart.filter(a => a.id == product.id);
        if (cuurentProduct.length > 0) {

          cart.filter(a => a.qnt = a.qnt + this.qnt)

        } else {
          cart.push(product)
        }
      }
      this._cartService.updateCartItemCount(cart.length);
      this._cartService.updateShoppingCart(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    })

    // console.log(this.books);


  }



  shop() {
    document.getElementById("shopBook").scrollIntoView({ behavior: "smooth" });
  }


  //search

  search() {

    if (this.searchTitle == '') {
      this.ngOnInit();
    } else {


      this.books = this.books.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchTitle.toLocaleLowerCase()) ||
          res.price.toString().match(this.searchTitle.toString()) ||
          res.author.toLocaleLowerCase().match(this.searchTitle.toLocaleLowerCase())
      });
    }

  }
}
