import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pageNoteFound.component';


// une app n'a pas de route jusqu'à ce que l'on les configure : 
// Attention l'ordre des routes est importe et particulièrement pour la dernière : ** . On doit aller du précis au général
const routes: Routes = [
  {path: '', redirectTo: 'comparaisons', pathMatch: 'full'}, // ici on capture l'url vide et on le redirige vers /comparaisons
  {path: '**', component: PageNotFoundComponent}// cet opérateur ** correspond à toutes les pages qui n'ont pas été interseptée précedement
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
