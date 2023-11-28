import { Coordonnee } from "./coordonnee";

export interface Auteur {
    url_pic: string;
    nom:string;
    pseudo: string;
    verifie: boolean;
    coordonnees: Coordonnee[];
    description: string;
}
