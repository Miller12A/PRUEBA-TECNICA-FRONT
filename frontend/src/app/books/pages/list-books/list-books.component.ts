import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class  ListBooksComponent implements OnInit {
  books: any[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getBooks('harry potter').subscribe((response: any) => {
      this.books = response.items.map((item: any) => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors?.join(', '),
        publishedDate: item.volumeInfo.publishedDate,
        type: item.volumeInfo.industryIdentifiers[0].type,
      }));
    });
  }
}
