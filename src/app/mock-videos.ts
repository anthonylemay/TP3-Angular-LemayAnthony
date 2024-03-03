import { Video } from "./video";
import { AUTEURS } from "./mock-auteurs";
import { Reaction } from "./avis";
import { CATEGORIES } from "./mock-categories";

export const VIDEOS: Video[] = [
    {
        id: 1,
        url_img: "https://picsum.photos/200/300?random=1",
        nom: "vidéo 1",
        description: "description de film 1",
        code: "ABC001",
        categorie: CATEGORIES[2],
        auteur: AUTEURS[3],
        date: new Date("2003-02-11"),
        duree: 3760,
        vues: 10433459,
        score: 5500,
        closedcaption: true,
        subtitle: true,
        avis: [
            {
                id: 1,
                auteur: AUTEURS[2],
                note: 9,
                commentaires: "commentaires 1",
                reaction: Reaction.Like,
                date: new Date("2023-10-29"),
            },
            {
                id: 2,
                auteur: AUTEURS[1],
                note: 8,
                commentaires: "commentaires 2",
                reaction: null, // No reaction provided
                date: null, // No date provided
            },
            {
                id: 3,
                auteur: AUTEURS[4],
                note: 9.5,
                commentaires: "commentaires 3",
                reaction: null, // No reaction provided
                date: null, // No date provided
            },
        ]
    },
    {
        id: 2,
        url_img: "https://picsum.photos/200/300?random=2",
        nom: "vidéo 2",
        description: "description de film 2",
        code: "ABC002",
        categorie: CATEGORIES[1],
        auteur: AUTEURS[2],
        date: new Date("1996-01-10"),
        duree: 68,
        vues: 23908,
        score: -7000,
        closedcaption: false,
        subtitle: true,
        avis: [
            {
                id: 4,
                auteur: AUTEURS[1],
                note: 1,
                commentaires: "commentaires 4",
                reaction: Reaction.Dislike,
                date: new Date("2023-11-01"), // Assuming a date for the example
            }
        ]
    },
    {
        id: 3,
        url_img: "https://picsum.photos/200/300?random=3",
        nom: "vidéo 3",
        description: "description de film 3",
        code: "ABC003",
        categorie: CATEGORIES[4],
        auteur: AUTEURS[4],
        date: new Date("2020-07-12"),
        duree: 345,
        vues: 1,
        score: 4500,
        closedcaption: true,
        subtitle: false,
        avis: [
            {
                id: 5,
                auteur: AUTEURS[4],
                note: 8,
                commentaires: "commentaires 5",
                reaction: Reaction.Like,
                date: new Date("2023-12-15"), // Assuming a date for the example
            }
        ]
    },
    {
        id: 4,
        url_img: "https://picsum.photos/200/300?random=4",
        nom: "vidéo 4",
        description: "description de film 4",
        code: "ABC004",
        categorie: CATEGORIES[3],
        auteur: AUTEURS[0],
        date: new Date("1988-11-11"),
        duree: 789,
        vues: 25,
        score: 3500,
        closedcaption: false,
        subtitle: false,
        avis: [
            {
                id: 6,
                auteur: AUTEURS[3],
                note: 7,
                commentaires: "commentaires 6",
                reaction: Reaction.Dislike,
                date: new Date("2024-01-20"), // Assuming a date for the example
            }
        ]
    },
    {
        id: 5,
        url_img: "https://picsum.photos/200/300?random=5",
        nom: "vidéo 5",
        description: "description de film 5",
        code: "ABC005",
        categorie: CATEGORIES[1],
        auteur: AUTEURS[4],
        date: new Date("2008-01-15"),
        duree: 99,
        vues: 0,
        score: 7500,
        closedcaption: false,
        subtitle: false,
        avis: [
            {
                id: 7,
                auteur: AUTEURS[0],
                note: 10,
                commentaires: "commentaires 7",
                reaction: Reaction.Like,
                date: new Date("2024-02-01"), // Assuming a date for the example
            }
        ]
    },
    {
        id: 6,
        url_img: "https://picsum.photos/200/300?random=6",
        nom: "vidéo 6",
        description: "description de film 6",
        code: "ABC006",
        categorie: CATEGORIES[3],
        auteur: AUTEURS[3],
        date: new Date("2015-04-04"),
        duree: 180,
        vues: 330,
        score: 2500,
        closedcaption: false,
        subtitle: false,
        avis: [
            {
                id: 8,
                auteur: AUTEURS[5],
                note: 3,
                commentaires: "commentaires 8",
                reaction: null, // No reaction provided
                date: null, // No date provided
            }
        ]
    }
];
