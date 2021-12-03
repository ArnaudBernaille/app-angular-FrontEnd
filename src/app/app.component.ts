import { Component } from '@angular/core'; // On importe les elemn que l'on veut dans le fichier.
import {OnInit}  from '@angular/core'; // pour pouvoir modifier ce qu'il se passe lorsque l'on créée un composant.

import {comparaison} from './comparaisons/comparaison'
// import { COMPARAISON } from './comparaisons/mock-Comparaison'; // OLD

//Le selector sert à ce que la page web reconnaisse le composant. Ici ce composant s'appel app-root
@Component({
  selector: 'formation-udemy',
  templateUrl: './app.component.html', // TemplqteUrl correspond au code html du composant
  //template: "<h1>List de comparaisons</h1>", // Si on veut un template simple écrit en dure. 
  //styleUrls: ['./app.component.css']
})

export class AppComponent {
}
