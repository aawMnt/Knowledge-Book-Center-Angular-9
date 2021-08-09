import { Book } from './../../objClass/book';
import { EcomUserService } from './../../service/ecom-user.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecom-admin-book-update',
  templateUrl: './ecom-admin-book-update.component.html',
  styleUrls: ['./ecom-admin-book-update.component.css']
})
export class EcomAdminBookUpdateComponent implements OnInit {
  updateBook: FormGroup;
  id = 0;
  updBook = new Book;
  selectedFile: any = File;
  constructor(private _activeRoute: ActivatedRoute, private _service: EcomUserService, private _builder: FormBuilder) { }

  ngOnInit(): void {

    this.updateBook = this._builder.group({
      name: '',
      author: '',
      price: '',
      qnt: '',
    })

    this.id = this._activeRoute.snapshot.params.id;
    this._service.getByidBook(this.id).subscribe(data => {
      console.log(data);
      this.updBook = data;
    })






  }
  
  file(event) {
    const file = event.target.files[0];

    let reder = new FileReader();
    reder.readAsDataURL(event.target.files[0]);
    reder.onload = (event2) => {
      // this.imgUrl = reder.result;

      // console.log(file);
      this.selectedFile = file;



    };
    

  }

  updateBookClk(updateBook : FormGroup) {


      
    this._service.updateBook(this.updBook,this.updBook.id).subscribe(data => {
      console.log(data);
    })



  }
}
