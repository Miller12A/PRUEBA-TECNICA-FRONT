import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksModule } from './modules/books/books.module';
import { HttpClientModule } from '@angular/common/http';
import { ListBooksComponent } from './modules/books/pages/list-books/list-books.component';

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
