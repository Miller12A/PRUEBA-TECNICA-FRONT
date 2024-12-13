import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private API_URL = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

  constructor(private http: HttpClient) {}

  getBooks(query: string) {
    return this.http.get(`${this.API_URL}${query}`);
  }

}
