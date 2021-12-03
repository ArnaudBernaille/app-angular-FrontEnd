import { Injectable } from "@angular/core";
import { comparaison } from "./comparaison";
// import { COMPARAISON } from "./mock-Comparaison"; // OLD

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators"


// Nous créeons un service : cad une liste de fonctions utiles pour nos composants. 

@Injectable()
export class ComparaisonService{

    // on rajoute un constructeur pour pouvor injecter la class httpClient
constructor(private http: HttpClient){ }

private comparaisonUrl = "https://feedback-app-2021.herokuapp.com/feedbackwall"

// Si jamais on veut archiver les logs plus tards on a plus qu'à modifier cette méthode :
private log(log : string) {
    console.info(log);
}

// Pour gerer les erreurs : 
// La syntaxe T en typescript veut dire que l'on va typer un type en lui même
// Code un peu compliqué mais permet à l'app de continuer de fonctionner même lorsqu'il y a une erreur.
private handleError<T>(operation='operation', result?: T) { // operation est le nom de la méthode qui a creer l'erreur
    return (error:any): Observable<T> => {
        console.log(error);
        console.log(`${operation} failed: ${error.message}`)

        return of(result as T); // renvoie un obsevable avec un type particulier. 
    };
}

// renvoie toutes les comparaisons
getComparaisons(): Observable<comparaison[]>{
    return this.http.get<comparaison[]>(this.comparaisonUrl).pipe(
        tap( _ => this.log('fetched comparaisons ' + "Un attribu de la premiere données récupérée : " +  _[0].Titre)), // tap permet d'executer une observation quelconque.
        catchError(this.handleError('getComparaisons', [])) // Pour anticiper les erreur Http
    )
}
   
// renvoie une comparaison en fonction de son id : 
getComparaison(id : number): Observable<comparaison> { // je met any car comparaison me sort une erreur => bizarre.
   const url = `${this.comparaisonUrl}/${id}`;

   return this.http.get<comparaison>(this.comparaisonUrl).pipe(
       tap( _ => this.log(`fetched comparaisons id = ${id}`)), // tap permet d'executer une observation quelconque.
        catchError(this.handleError<comparaison>(`get comparaisons id = ${id}`)) // Pour anticiper les erreur Http
)
}

// renvoie tous les types de comparaison existants : 
// A coder de façon dynamique :
getComparaisonTypes() : string[]{
    return ['Facebook', 'Instagram', 'Tinder', 'Page de vente', 'Autre'] // il faut en rajouter bien sûr.
}


}

