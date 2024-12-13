import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  standalone: true,
  imports: [],
  templateUrl: './modal-info.component.html',
  styleUrl: './modal-info.component.css',
})
export class ModalInfoComponent {
  
  @Output() closeModal: EventEmitter<void> = new EventEmitter();

  closeInfoModal(): void {
    this.closeModal.emit();
  }
}
