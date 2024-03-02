import {Avis} from "./avis"
import {Auteur} from "./auteur"


export interface Video {
    id: number;
    url_img: string;
    nom: string;
    description: string;
    code: string;
    categorie_id: number;
    auteur: Auteur;
    date: Date;
    duree: number;
    vues: number;
    score: number;
    closedcaption: boolean;
    subtitle: boolean;
    avis: Avis[];
}

