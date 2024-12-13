import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  standalone: true,
  imports: [],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css'
})
export class ModalDeleteComponent {

  @Output() closeModal: EventEmitter<void> = new EventEmitter();
  @Output() confirmDelete: EventEmitter<void> = new EventEmitter();


  closeDeleteModal(): void {
    this.closeModal.emit();
  }

  onConfirm(): void {
    this.confirmDelete.emit();
  }

}
