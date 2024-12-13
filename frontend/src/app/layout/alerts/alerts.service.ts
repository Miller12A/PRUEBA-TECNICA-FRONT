import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new Subject<string>(); // Emite el ID de la alerta a mostrar
  alert$ = this.alertSubject.asObservable();

  showAlert(id: string): void {
    this.alertSubject.next(id);
  }
}
