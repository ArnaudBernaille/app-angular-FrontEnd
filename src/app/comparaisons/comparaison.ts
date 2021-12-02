// on va définir ici l'objet comparaison.



export class comparaison{
    id: number = 0 ;
    titre: string = "defaultTitle";
    description: string = "defaultDescription" ;
    auteur: string = "defaultAuthor";
    comparaison1: string = "defaultComp1";
    comparaison2: string = "defaultTitle";
    types : Array<string> = ["photoFacebook"];  // Il pourrait être interressant de poser quelques type de comparaisons : par exemple code, photo FB, photo IG ...
    // Je pars du principe que une comparaison peut avoir plusieur type. A voir...
}