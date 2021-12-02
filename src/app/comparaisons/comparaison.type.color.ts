import { NgModule, Pipe, PipeTransform } from '@angular/core';

// donne une couleur à une comparaison en fonction du type
@Pipe ({name : 'comparaisonTypeColor'})
export class comparaisonTypeColor implements PipeTransform {
    
    
    transform(type: string): string {

        let color : string = "";

        switch(type) {
            case 'Facebook':
            color =  "blue";
            break;
            case 'Instagram':
            color = "pink lighten-3";
            break;
        }

        return 'classMt ' + color; // cette classe pourra être interpreter pour définir la couleur.

    }

}