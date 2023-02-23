import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointments';

  listCitas: any[] = [];

  agregarCita(cita: any): void {
    this.listCitas.push(cita);
    console.log(this.listCitas);
  }

  eliminarCitaListado(index: number): void {
    this.listCitas.splice(index, 1);
  }
}
