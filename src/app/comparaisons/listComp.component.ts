import { Component } from '@angular/core'; // On importe les elemn que l'on veut dans le fichier.
import {OnInit}  from '@angular/core'; // pour pouvoir modifier ce qu'il se passe lorsque l'on créée un composant.

import {comparaison} from '../comparaisons/comparaison'
import { COMPARAISON } from '../comparaisons/mock-Comparaison';
import {Router} from '@angular/router'
import { ComparaisonService } from './comparaison.service';

//Le selector sert à ce que la page web reconnaisse le composant. Ici ce composant s'appel app-root
@Component({
  selector: 'listComp',
  templateUrl: './listComp.template.html', // TemplqteUrl correspond au code html du composant
  //template: "<h1>List de comparaisons</h1>", // Si on veut un template simple écrit en dure. 
  //styleUrls: ['./app.component.css']
  //providers : [ComparaisonService] // Attention ne pas oublier pour les services. // Nous n'en avons pas besoin ici car nous allons le déclarer de façon global
})

export class ListComptComponent {
  // export sert à rendre ce code accessible depuis d'autre fichier.

  public ComparaisonAttribut!: comparaison[]; 
  // je rajoute "Attribut" apres le nom de la variable pour le diférencier de la classe. 
  // La classe est un tableau de type comparaison. Comparaison va être un objet.
  // il faut maintenant définir l'ojet comparaison.
  // Les composants ont un cycle de vie aec plusiseurs fonctions qui son appelé lors de sa creation destruction etc...
  // On pet vouloir agir sur le cycle de vie du composant.
  // Il faut mettre un ! sinon ça marche pô ptdr

  public title: string = "Page des comparaisons"; // on fait cela pour que la valeur de cette variable soit accessible depuis notre page internet
  
  // Pour notre valeur onClick : 
  /*
  // Pour l'ancienne façon de faire : 
  public value: string = '';
  onKey(event : KeyboardEvent){
    this.value = "Bonjour " + (<HTMLInputElement>event.target).value; // On a passer à la methode onKey l'evenement. On appel dessus les méthodes target et value. 
    // Je pense que là faut pas trop chercher : on renvoie juste un object evenement et cet objet a des attibut dont la value. 
  }
    */

  // On injecte dans le composant le comparaison service, on a donc à présent accès à nos méthodes.
  constructor(private router : Router, private compService:  ComparaisonService ){
    // let ComparaisonService = new ComparaisonService(); // a ne surtout pas faire !
  } // Il faut passer le router à un constructeur. Je ne sais pas bien pk mais admettons.

  public value: string = '';

  onKey(value : string){
    this.value = value;
 }
  
// BLoc de cours 2 :
public values = '';
// ______

public age = 12;


  // Etant donner que nous avons importer le OnInit depuis le coeurs d'Angular nous sommes obligé de rajouter cette méthode.
  ngOnInit(){
    // Methode d'avant :
    //this.ComparaisonAttribut = COMPARAISON; // COMPAISONS est une constante que nous allons défnir dans un fichier à coté
    // COMPARAISON est un ensemble test de comparaison

    // Maintenant nous récupérons les données depuis le service :
    this.ComparaisonAttribut = this.compService.getComparaisons();
  }

  onClick(){
    console.log("clic clic")
  }

  // on va creer une fonction que l'on va appeler lorsque l'utilisateur va cliquer sur une comparaison.
  // Les appel des méthodes vont avoir lieu dans le template.
  selectComparaison(comparaison : comparaison){
    console.log("Vous avez cliqué sur : " + comparaison.titre);
    let link = ['comparaison/',comparaison.id];
    this.router.navigate(link); // On notera que l'on demande un tableau pour l'url => etrange mais bon. Visiblement le format est : [URL de redirecte, les params]

  }


}
