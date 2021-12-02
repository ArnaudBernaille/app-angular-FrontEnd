import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

@Directive({
    selector: '[compBorderCard]' // selector CSS // Notre directive va s'appliquer à tous les éléments qui ont un attribus "compBorderCard"
    // si on ne met pas les crochet notre directive se serait appliquer à toute les balise compBorderCard et ça n'aurait pas de sens.
    // il est recommendé de préfixer les directives pour éviter les conflits avec des librairies standard.
})

export class BorderCompDirective {
    constructor (private el: ElementRef){
        // Je suppose que lorsque la page est appeler le constructeur de la directive est appelé.
        this.setBorder('#f5f5f5'); // Bordure blanche de base. // Lorsque le constructeur est appelée nous allons 
        this.setHeight(180);
    }

@Input('compBorderCard') borderColor!: string; // parametre d'entré de la méthode
// le parametre se passe dans le template.

//@Input() borderColor!: string;

@HostListener('mouseenter') onMouseEnterTralalala(){ // A quoi sert le onMouseEnterTralalala, j'ai bien sur rajouté le tralala pour voir si c'était une vrai notation
    this.setBorder(this.borderColor || 'green'); // Notation très intrerressante : si l'utilisateur ne rentre pas de coulour alors on prend l"autre : notation ou !
}

@HostListener('mouseleave') onMouseLeaveTralalala(){
    this.setBorder('#f5f5f5');
}

private setBorder(color : string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border; // el ? 

}

private setHeight(height : number){
    this.el.nativeElement.style.height = height + 'px';
}
}