import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './pages/add-books/add-books.component';
import { EditBooksComponent } from './pages/edit-books/edit-books.component';
import { ListBooksComponent } from './pages/list-books/list-books.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list-books' },
  {
    path: 'list-books',
    component: ListBooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
