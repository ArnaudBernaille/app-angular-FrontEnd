import { Component, Input, OnInit} from "@angular/core"; // Input permet d'ecrire une propriété d'entré d'un composant
// si on def ce composant comme un fils d'un autre alors il faudra définir les propriétés d'entré de ce composant.


import { Router } from "@angular/router";
import { ComparaisonService } from "./comparaison.service";
import { comparaison } from "./comparaison";

@Component({
    selector: 'compFormulaireModif',
    templateUrl : 'comparaison-form.component.html',
    styleUrls: ['comparaison-form.component.css'] //il est possible de passer plusieurs feuilles de style a un composant mais un seul template. 
})

// Le formulaire pour pouvoir MODIFIER une comparaison
export class EditComparaisonFormulaire implements OnInit{ 

    @Input() comparaison!: comparaison; // Le @input veut dire que c'est une propriété d'entré du composant
    
    public types!: Array<string>; // Tous les types possibles d'une comparaison par exemple Facebook instagram etc ...
    // On peut partir du principe que une comparaison à plusieur types possible => A voir
    
    
    constructor(
    private comparaisonService: ComparaisonService, // le service contenant les méthodes. 
    private router : Router) {}

    ngOnInit(){
        this.types = this.comparaisonService.getComparaisonTypes();
    }

    // Pour savoir si la comparaison en cours d'édition possède un type.
    hasType(type: string): boolean{
        let index = this.comparaison.Type.indexOf(type);
        if(~index) return true; 
        return false;
    }

    // A chaque fois que l'utilisateur choisie un type alors le modèle est maj :
    selectType($event: any, type : string): void {
        let checked = $event.target.checked;
        if(checked) {
            this.types.push(type)
        }else {
            let index = this.comparaison.Type.indexOf(type);
            if(~index){
                this.comparaison.Type.splice(index, 1); // je comprend pas
            }
        }
    }

    // methode qui renvoie toujours true pour les type, je la code si jamais on veut rajouter des conditions plus tard sur les types
    // Pour l'instant ne sert à rien
    isTypesValid(type: string): Boolean{
        return true;
    }


    // Cette methode va juste rediriger l'utilisateur, les changements sont deja pris en compte grace à la methode NgModel.
    onSubmit(): void{
        console.log('Submit form !');
        let link = ['/comparaison', this.comparaison._id];
        this.router.navigate(link);
    }

    

}