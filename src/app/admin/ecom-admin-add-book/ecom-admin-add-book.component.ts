import Swal  from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/objClass/book';
import { EcomUserService } from 'src/app/service/ecom-user.service';

@Component({
  selector: 'app-ecom-admin-add-book',
  templateUrl: './ecom-admin-add-book.component.html',
  styleUrls: ['./ecom-admin-add-book.component.css']
})
export class EcomAdminAddBookComponent implements OnInit {

  @Input()
  book: Book;

  addBook: FormGroup;
  selectedFile: any = File;
  imgUrl;

  constructor(private _builder: FormBuilder, private _service: EcomUserService, private _snk: MatSnackBar) { }

  ngOnInit(): void {
    this.addBook = this._builder.group({

      name: '',
      author: '',
      price: '',
      picByte: '',

    });
  }
  file(event) {

    const file = event.target.files[0];

    let reder = new FileReader();
    reder.readAsDataURL(event.target.files[0]);
    reder.onload = (event2) => {
      this.imgUrl = reder.result;

      // console.log(file);
      this.selectedFile = file;



    };
  }

  addBookClk(addBook: FormGroup) {

    const users = this.addBook.value;
    const formData = new FormData();
    formData.append("users", JSON.stringify(users));
    formData.append("imageFile", this.selectedFile);
    this._service.addBook(formData).subscribe(data => {
      // console.log(data);
     Swal.fire("Suucess","Book Add Done",'success')
    }, err => {
      console.log(err);
      Swal.fire("error","Server Error","error")
    });




  }

  reset(){
    this.addBook.reset();
  }

}
