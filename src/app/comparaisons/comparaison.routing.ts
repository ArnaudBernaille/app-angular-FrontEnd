import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { ListComptComponent } from "./listComp.component";
import { DetailComparaisonComponent } from "./detail-comparaison.component";
import { EditComparaisonFormulaire } from "./comparaison-form.component";
import {ComparaisonFormulaire} from "./edit-comparaison.component"

//Definitionn des routes
// Faire bien attention à l'ordre de déclaration des routes. 
const comparaisonRoutes: Routes = [
    {path: 'comparaisons', component: ListComptComponent},
    {path: 'comparaison/edit/:id', component: ComparaisonFormulaire},
    {path: 'comparaison/:id', component: DetailComparaisonComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(comparaisonRoutes) // Attention à la méthode forChild.
        // il ne faut surtout pas utiliser la méthode forRoute dans les routers enfants.
        
    ],
    exports: [
        RouterModule
    ]

})
export class comparaisonRoutingModule{}
