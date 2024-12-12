import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './pages/add-books/add-books.component';
import { EditBooksComponent } from './pages/edit-books/edit-books.component';
import { ListBooksComponent } from './pages/list-books/list-books.component';

const routes: Routes = [];

export const categoriesRoutes: Route[] = [
  { path: '', redirectTo: 'list-books' },
  {
    path: 'list-books',
    component: AddBooksComponent,
  },
  {
    path: 'add-books',
    component: EditBooksComponent,
  },
  {
    path: 'edit-books/:id',
    component: ListBooksComponent,
  },
];