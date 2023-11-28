import {Auteur} from "./auteur";

export interface Avis {
    note: number;
    commentaires: string;
    auteur: Auteur;
}
