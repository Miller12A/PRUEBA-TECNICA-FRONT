import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { AlertService } from './alerts.service';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  alerts = [
    { id: 'edit', message: 'Libro Editado Correctamente', type: 'blue', visible: false },
    { id: 'delete', message: 'Libro Eliminado Correctamente', type: 'red', visible: false },
    { id: 'add', message: 'Libro Agregado Correctamente', type: 'green', visible: false }
  ];

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert$.subscribe((id) => {
      this.showAlert(id);
    });
  }

  showAlert(id: string): void {
    const alert = this.alerts.find(alert => alert.id === id);
    if (alert) {
      alert.visible = true;

      // Ocultar alerta después de 5 segundos
      setTimeout(() => {
        alert.visible = false;
      }, 5000);
    }
  }
}
