import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router"; // Sert a extraire l'id
import { comparaison } from "./comparaison";
import { ComparaisonService } from "./comparaison.service";

@Component({
    selector: 'detail-comparaison',
    templateUrl : './detail.comparaison.component.html',
    //providers : [ComparaisonService] // Attention ne pas oublier pour les services. // Nous n'en avons pas besoin ici car nous allons le déclarer de façon global
})

export class DetailComparaisonComponent {

    public comparaison!: comparaison; // Ne contiend que la comparaison à afficher

    constructor(
        private route: ActivatedRoute, 
        private router : Router,
        private compService : ComparaisonService) {} // ActivatedRoute => pour recupérer des infos dans l'url
        
        ngOnInit(): void { // void car pas de valeur de retour
           

            //let id = +this.route.snapshot.params['id']; // on recupere l'id de la comparaison contenue dans l'url
            // snapshot permet de récupérer le param de façon synchrone cad que l'on bloque l'execution du programme tant que on a pas récupéré 
            // l'identifiant recherché

            // Ancienne méthode :
            /*
             this.comparaisons = COMPARAISON;
            for(let i = 0; i < this.comparaisons.length; i++){ 
                if(this.comparaisons[i].id == id){
                    this.comparaison = this.comparaisons[i];
                }
            }
            */

            // Maintenant on fait comme cela : 

            //this.comparaison = this.compService.getComparaison(id);

            let id = +this.route.snapshot.params['id'];
            this.compService.getComparaison(id)
            .subscribe(comp =>  this.comparaison = comp)




    }

    goBack(): void{
        this.router.navigate(["/comparaison"]); // Pour retourner sur la page principale.
        // window.history.back(); // Pour revenir à la derniere page de laquelle l'utilisateur vient
    }

    goEdit(comp: comparaison):void{
        let link = ["/comparaison/edit", comp._id]
        this.router.navigate(link);
    }
}

