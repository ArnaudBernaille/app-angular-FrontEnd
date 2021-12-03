// on va définir ici l'objet comparaison.


/*
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
*/

/*
export class comparaison{
    id: number = 0 ;
    Titre: string = "defaultTitle";
    Description: string = "defaultDescription" ;
    PseudoUser: string = "defaultAuthor";
    Contenu1: string = "defaultComp1";
    Contenu2: string = "defaultTitle";
    Type : Array<string> = ["photoFacebook"];  // Il pourrait être interressant de poser quelques type de comparaisons : par exemple code, photo FB, photo IG ...
    // Je pars du principe que une comparaison peut avoir plusieur type. A voir...
}
*/

export class comparaison{
    _id: string = "0" ;
    id_User: string = "0" ;
    PseudoUser: string = "defaultAuthor";
    Titre: string = "defaultTitle";
    Type : Array<string> = ["photoFacebook"];  // Il pourrait être interressant de poser quelques type de comparaisons : par exemple code, photo FB, photo IG ...
    Date: string = "2021-12-02T20:00:50.000Z" ;
    Contenu1: string = "defaultComp1";
    Contenu2: string = "defaultTitle";
    Description: string = "defaultDescription" ;
    Token: string = "jlhzgkjhbzk" ;
    Adresse: string = "rqvhkggheq" ;
    // Je pars du principe que une comparaison peut avoir plusieur type. A voir...
}