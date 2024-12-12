import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './pages/list-books/list-books.component';


@NgModule({
  declarations: [
    ListBooksComponent
    
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
