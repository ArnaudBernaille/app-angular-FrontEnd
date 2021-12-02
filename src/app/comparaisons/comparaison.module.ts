import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComptComponent } from "./listComp.component";
import { DetailComparaisonComponent } from "./detail-comparaison.component";
import { BorderCompDirective } from "./border-comp.directiv";
import { comparaisonTypeColor } from "./comparaison.type.color"; // le pipe, je crois que je l'ai pas nommé correctement mdr
import { comparaisonRoutingModule } from "./comparaison.routing";
import { ComparaisonService } from './comparaison.service';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditComparaisonFormulaire } from './comparaison-form.component';
import { ComparaisonFormulaire } from './edit-comparaison.component'
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
    imports:[
        CommonModule, // Contiend des trucs du style le ngIf // Il est le module par defaut à importer dans tous les sous modules (cad les modules qui ne sont pas des modules racines)
        FormsModule,
        ReactiveFormsModule,
        comparaisonRoutingModule, // visiblement les routers se mettent ici
        BrowserModule
    ],
    declarations: [ListComptComponent,
        DetailComparaisonComponent,
        BorderCompDirective,
        comparaisonTypeColor,
        EditComparaisonFormulaire,
        ComparaisonFormulaire
    ],
    providers : [ComparaisonService] // On peut déclarer des services propre à ce module. // Le service sera dispo dans tous les composants du module.
    // ! Il faudra juste l'injecter au niveau du constructeur.

})
export class comparaisonModule{};