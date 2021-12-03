import { Component, OnInit} from "@angular/core"; // Input permet d'ecrire une propriété d'entré d'un composant
// si on def ce composant comme un fils d'un autre alors il faudra définir les propriétés d'entré de ce composant.
import { ActivatedRoute, Params } from "@angular/router";
import { ComparaisonService } from "./comparaison.service";
import { comparaison } from "./comparaison";

@Component({
    selector: 'edit-comparaison',
    template : `
    <h2 class = 'header center'> Editer {{comparaison?.Titre}} </h2>
    <compFormulaireModif [comparaison]= "comparaison" > </compFormulaireModif>` 
    // On injecte la balise de selection de notre formulaire 
    // La syntaxe [] indique une liaison de propriété sur l'entré du composant que l'on a définit avec le input
    // le ? dans {{comparaison?.titre}} veut dire : affiche le titre de la comparaison ssi la comparaison existe.
})

// Le formulaire pour pouvoir MODIFIER une comparaison
export class ComparaisonFormulaire implements OnInit{ 

    public comparaison: comparaison = {
        _id: "",
        id_User: "",
        PseudoUser: "",
        Titre: "",
        Type: [],
        Date: "",
        Contenu1: "",
        Contenu2: "",
        Description: "",
        Token: "",
        Adresse: ""
    };

    constructor(
    private route: ActivatedRoute, // le service contenant les méthodes. 
    private comparaisonService : ComparaisonService) {}


    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.comparaisonService.getComparaison(id)
            .subscribe(comp =>  this.comparaison = comp)
        console.log("on appel le service avec la comparaison numero : " + id);
    }

    
}

    

