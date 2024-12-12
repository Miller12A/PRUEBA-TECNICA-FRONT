import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListBooksComponent } from "./books/pages/list-books/list-books.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
