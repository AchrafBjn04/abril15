import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from './ejInterfaces/ejercicio01/ejercicio01.component';
import { Exercise01Component } from './ejDirectivas/exercise01/exercise01.component';
import { Exercise02Component } from './ejDirectivas/exercise02/exercise02.component';
import { Exercise03Component } from './ejDirectivas/exercise03/exercise03.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercise03Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril15';
}
