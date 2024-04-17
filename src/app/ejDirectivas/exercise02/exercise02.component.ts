import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise02',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './exercise02.component.html',
  styleUrl: './exercise02.component.css'
})
export class Exercise02Component {
  origenes: string[] = ['Madrid', 'Valencia', 'Bilbao', 'Cadiz'];
  destinos: string[] = ['Barcelona', 'Galicia', 'Zaragoza', 'Málaga'];

  origenSeleccionado: string = '';
  destinoSeleccionado: string = '';
  fechaIda: Date = new Date();
  fechaVuelta: Date = new Date();
  numPasajeros: number = 0;

  mostrarInformacion(){
    alert('Vuelo seleccionado: ' 
    + '\n -Origen: ' + this.origenSeleccionado 
    + '\n -Destino: ' + this.destinoSeleccionado 
    + '\n -Fecha ida: ' + this.fechaIda 
    + '\n -Fecha vuelta: ' + this.fechaVuelta 
    + '\n -Número de pasajeros: ' + this.numPasajeros)
  }
}
