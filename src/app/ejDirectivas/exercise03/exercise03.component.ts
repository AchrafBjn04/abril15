import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise03',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercise03.component.html',
  styleUrl: './exercise03.component.css'
})

export class Exercise03Component {
  generos: string[] = ['Hombre', 'Mujer'];
  nacionalidades: string[] = ['Española', 'Francesa', 'Inglesa', 'Irlandesa', 'Alemana'];
  lengProgramacion: string[] = ['C++', 'Java', 'JS', 'Python'];

  generoSeleccionado: string = '';
  nacionalidadSeleccionada: string = '';
  lengProgramacionSeleccionados: string[] = [''];

  mostrarInformacion() {
    let lenguajes: string[] = [''];

    this.lengProgramacionSeleccionados.forEach((lenguaje, index) => {
      if (lenguaje === 'true') {
        lenguajes.push(this.lengProgramacion[index]);
      }
    });

    alert('Resultado: ' +
      '\n -Género: ' + this.generoSeleccionado +
      '\n -Nacionalidad: ' + this.nacionalidadSeleccionada +
      '\n -Lenguajes de programación: ' + lenguajes);
  }
}
