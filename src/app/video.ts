export interface Video {
    id: number;
    url_img: string;
    nom: string;
    description: string;
    code: string;
    categorie: Categorie;
    auteur: Auteur;
    date: Date;
    duree: number;
    vues: number;
    score: number;
    closedcaption: boolean;
    subtitle: boolean;
    avis: Avis[];
}

export interface Categorie {
    id: number;
    nom: string;
}

export interface Auteur {
    id: number;
    nom: string;
    pseudo: string;
    verifie: boolean;
    description: string;
    url_pic: string;
    coordonnees: Coordonnees;
}

export interface Coordonnees {
    id: number;
    courriel: string;
    facebook: string;
    instagram: string;
    twitch: string;
    site_web: string;
}

export interface Avis {
    auteur: Auteur;
    note: number;
    commentaires: string;
    reaction: string | null;
    date: Date;
}


