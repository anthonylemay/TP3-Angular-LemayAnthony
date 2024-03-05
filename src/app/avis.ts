export enum Reaction {
    Like = 'like',
    Dislike = 'dislike'
}


export interface Avis {
    id?: number;
    video_id: number;
    auteur_id: number;
    reaction: Reaction | null;
    commentaires: string;
    note: number;
    date: Date | null;
}
