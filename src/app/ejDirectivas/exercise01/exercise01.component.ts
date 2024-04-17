import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise01',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './exercise01.component.html',
  styleUrl: './exercise01.component.css'
})
export class Exercise01Component {
  tiposRam: string[] = ['RAM32', 'RAM16', 'RAM8'];
  procesadores: string[] = ['Corei9N8', 'Core Ultra', 'Core Pentium Silver', 'Celeron'];
  tarjetaGrafica: boolean = false;
  discosDuros: string[] = ['HDD', 'SDD'];
  fuentesAlimentacion: number[] = [500, 600, 850, 1000];

  ramSeleccionada: string = '';
  procesadorSeleccionado: string = '';
  tarjetaGraficaSeleccionada: boolean = false;
  discoDuroSeleccionado: string = '';
  fuenteAlimentacionSeleccionada: number = 0;

  mostrarInformacion(){
    alert('Tu PC: ' 
    + '\n -RAM: ' + this.ramSeleccionada 
    + '\n -Procesador: ' + this.procesadorSeleccionado 
    + '\n -Tarjeta gráfica: ' + this.tarjetaGraficaSeleccionada 
    + '\n -Disco duro: ' + this.discoDuroSeleccionado 
    + '\n -Fuente de alimentación: ' + this.fuenteAlimentacionSeleccionada)
  }
}