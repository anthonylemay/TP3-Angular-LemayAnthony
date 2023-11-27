import { Coordonnee } from "./coordonnee";

export interface Auteur {
    nom:string;
    pseudo: string;
    verifie: boolean;
    coordonnees: Coordonnee[];
    description: string;
}
