import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EcomUserService } from 'src/app/service/ecom-user.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/objClass/book';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ecom-admin-view-book',
  templateUrl: './ecom-admin-view-book.component.html',
  styleUrls: ['./ecom-admin-view-book.component.css']
})
export class EcomAdminViewBookComponent implements OnInit {

  p: number = 1;
  totalRecords: number;
  getBook: Array<Book>;
  resiveBook: Array<Book>;

  constructor(private _service: EcomUserService, private _router: Router, private _snk: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this._service.getBooks().subscribe((data: any) => {

      // console.log(data);
      this.successfullRespons(data);
      // this.getBook = data.;
      this.totalRecords = data.length;

    },(err)=>{
      Swal.fire("error","Something is Wrong",'error')
    })
  }



  successfullRespons(data) {
    this.getBook = new Array<Book>();
    this.resiveBook = data;
    for (const book of this.resiveBook) {
      const bookinfo = new Book();
      bookinfo.id = book.id;
      bookinfo.name = book.name;
      bookinfo.retrievedImage = 'data:image/jpeg;base64,' + book.picByte;
      bookinfo.author = book.author;
      bookinfo.price = book.price;
      bookinfo.picByte = book.picByte;
      this.getBook.push(bookinfo);
    }

  }

  delete(id) {
    this._service.deleteBook(id).subscribe(data => {

      // console.log(data);
      this.getAllBook();
      this._snk.open("This Iteam is Remove from WebApp", "", {
        duration: 3000
      })
    });

  }

  updateBooks(id) {
    this._router.navigate(['/admin-dash/updateBook', id])

  }

  deleteAll() {

    Swal.fire({
      title: 'Do you want to Delete All Iteams from WebApp?',
      showDenyButton: true,
      showCancelButton: true,
      icon:'warning',
      confirmButtonText: `DeleteAll`,
      
    }).then((result) => {

      if (result.isConfirmed) {
        this._service.deleteAll().subscribe(data => {
          console.log("delete all");
          this.getAllBook();
          Swal.fire('All Iteams is Deleted', '', 'success')
        })

      } else if (result.isDenied) {
        Swal.fire('Iteams Not Deleted', '', 'info')
      }
    })







  }

}
