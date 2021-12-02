import { Injectable } from "@angular/core";
import { comparaison } from "./comparaison";
import { COMPARAISON } from "./mock-Comparaison";



// Nous créeons un service : cad une liste de fonctions utiles pour nos composants. 

@Injectable()
export class ComparaisonService{

// renvoie toutes les comparaison
getComparaisons(): comparaison[]{
    return COMPARAISON; 
}

// renvoie une comparaison en fonction de son id : 
getComparaison(id : number): any{ // je met any car comparaison me sort une erreur => bizarre.
    let comparaisons = this.getComparaisons();

    for(let index = 0; index < comparaisons.length; index++){
        if(id == comparaisons[index].id){
            return comparaisons[index];
        }
    }
}

// renvoie tous les types de comparaison existants : 
// A coder de façon dynamique :
getComparaisonTypes() : string[]{
    return ['Facebook', 'Instagram', 'Tinder', 'Page de vente', 'Autre'] // il faut en rajouter bien sûr.
}


}

