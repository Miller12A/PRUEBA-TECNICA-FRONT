import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    BooksModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
