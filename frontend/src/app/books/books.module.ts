import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBooksComponent } from './pages/add-books/add-books.component';
import { EditBooksComponent } from './pages/edit-books/edit-books.component';
import { ListBooksComponent } from './pages/list-books/list-books.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddBooksComponent,
    EditBooksComponent,
    ListBooksComponent,
  ],
  exports: [
    AddBooksComponent,
    EditBooksComponent,
    ListBooksComponent,
  ]
})
export class BooksModule { }
