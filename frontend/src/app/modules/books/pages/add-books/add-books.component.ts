import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [],
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css'],
})
export class AddBooksComponent {
  @Output() closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }
}
