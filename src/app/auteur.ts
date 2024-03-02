import { Coordonnee } from "./coordonnee";

export interface Auteur {
    id:number;
    nom:string;
    pseudo: string;
    verifie: boolean;
    coordonnees: Coordonnee[];
    description: string;
    url_pic: string;
}
