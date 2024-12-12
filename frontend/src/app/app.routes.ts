import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'modules',
    children: [
      {
        path: 'books',
        loadChildren: () => import('./books/books-routing.module').then(m => m.BooksRoutingModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'books',
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'modules'
  }
];
