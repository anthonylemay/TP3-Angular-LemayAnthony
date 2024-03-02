import {Auteur} from "./auteur";

export enum Reaction {
    Like = 'like',
    Dislike = 'dislike'
}


export interface Avis {
    id: number;
    auteur: Auteur;
    note: number;
    commentaires: string;
    reaction: Reaction | null;
    date: Date | null;
}

