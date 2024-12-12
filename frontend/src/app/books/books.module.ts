import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './pages/list-books/list-books.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ListBooksComponent
  ]
})
export class BooksModule { }
