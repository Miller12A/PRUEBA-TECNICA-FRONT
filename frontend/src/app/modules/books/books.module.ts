import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from '../books/pages/list-books/list-books.component';
import { ModalDeleteComponent } from '../../layout/modal-delete/modal-delete.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ListBooksComponent,
    ModalDeleteComponent
  ]
})
export class BooksModule { }
