import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-books',
  standalone: true,
  imports: [],
  templateUrl: './edit-books.component.html',
  styleUrl: './edit-books.component.css'
})
export class EditBooksComponent {

  @Output() closeModal = new EventEmitter<void>();
  
    closeEdit(): void {
      this.closeModal.emit();
    }

}
