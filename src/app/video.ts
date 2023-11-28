import {Avis} from "./avis"
import {Auteur} from "./auteur"


export interface Video {
    url_img: string;
    nom: string;
    description: string;
    code: string;
    categories: Categorie;
    auteur: Auteur;
    date: Date;
    duree: number;
    closedcaption: boolean;
    subtitle: boolean;
    score: number;
    vues: number;
    avis: Avis[];
}

export interface Categorie {
    nom: string;
}


