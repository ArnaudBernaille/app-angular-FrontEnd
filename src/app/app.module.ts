import { NgModule } from '@angular/core';
import { Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // NPO d'importer le router
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNoteFound.component';
import { comparaisonModule } from './comparaisons/comparaison.module'; // Contiend tous nos modules en rapport avec les comparaison

@NgModule 
({
  declarations: [
    
    AppComponent, // Tous les composant qui appartienne au module. 
    PageNotFoundComponent
  ],
  imports: [ // ! Attention à l'ordre d'importation des modules, c'est très important pour les routings
    BrowserModule, // les modules racines ont besoin d'importer ce module mais ce n'est pas le cas des autres.
    comparaisonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// bootstrap permet d'identifier le module racine qui est appelé au démarrage de l'application.
// appComponant est le composant racine du module racine de notre projet