export interface VideoSubmission {

        id?: number;
        url_img: string;
        nom: string;
        description: string;
        code: string;
        categorie_id: number;
        auteur_id: number;
        date: string;
        duree: number;
        vues: number;
        score: number;
        closedcaption: boolean;
        subtitle: boolean;

}
