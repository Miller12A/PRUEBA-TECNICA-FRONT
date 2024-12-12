import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { HttpClientModule } from '@angular/common/http';
import { ListBooksComponent } from './books/pages/list-books/list-books.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    ListBooksComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
