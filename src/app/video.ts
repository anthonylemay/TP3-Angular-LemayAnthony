import {Avis} from "./avis"
import {Auteur} from "./auteur"


export interface Video {
    nom: string;
    description: string;
    code: number;
    categories: Categorie;
    auteur: Auteur;
    date: Date;
    duree: number;
    vues: number;
    avis: Avis[];
}

export interface Categorie {
    nom: string;
}


