import { BookCart } from './../objClass/book-cart';
import { Book } from './../objClass/book';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { EcomUserclass } from './../objClass/ecom-userclass';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EcomUserService {

  serverUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {


  }

  getUsers() {
    console.log('Getting all users');
    return this.httpClient.get<EcomUserclass[]>(this.serverUrl + 'users/get');
  }

  addUser(newUser: EcomUserclass) {
    return this.httpClient.post<EcomUserclass>(this.serverUrl + 'users/add', newUser);
  }
  deleteUser(id) {
    return this.httpClient.delete<EcomUserclass>(this.serverUrl + 'users/' + id);
  }

  getBooks() {
    return this.httpClient.get<BookCart[]>(this.serverUrl + 'books/get');
  }

  addBook(formData: FormData) {
    return this.httpClient.post<Book>(this.serverUrl + 'books/add', formData);
  }

  deleteBook(id) {
    return this.httpClient.delete<Book>(this.serverUrl + 'books/' + id);
  }

  deleteAll() {
    return this.httpClient.delete<Book>(this.serverUrl + 'books/deleteAll')
  }

  getByidBook(id) {

    return this.httpClient.get<Book>(this.serverUrl + 'books/findby/' + id);
  }

  updateBook(updBook: Book, id: number,): Observable<Book> {
    return this.httpClient.put<Book>(this.serverUrl + 'books/update/' + id, updBook);
  }

  uploadImg(uploadData: FormData) {
    return this.httpClient.post(this.serverUrl + 'books/upload', uploadData);
  }


  // ***************************************************************************************************************************************


  cartSubject = new Subject<any>();



  postCartPro(getDetails): Observable<any> {
    return this.httpClient.post<any>(this.serverUrl + 'product/pro', getDetails);
  }

  getElementByBookId(id: number): Observable<BookCart> {
    return this.httpClient.get<BookCart>(this.serverUrl + 'books/findby/' + id);

  }




}
