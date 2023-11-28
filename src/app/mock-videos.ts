import {Video} from "./video";
import {CATEGORIES} from "./mock-categories";
import {AUTEURS} from "./mock-auteurs";


export const VIDEOS: Video[] =[
    {   url_img: "https://picsum.photos/200/300?random=1",
        nom: "vidéo 1",
        description: "description film 1",
        code: 1,
        categories: CATEGORIES[0],
        auteur: AUTEURS[3],
        date: new Date("02-11-2003"),
        duree: 60,
        vues: 100,
        score: 5500,
        closedcaption: true,
        subtitle: true,
        avis:[{
            note: 9,
            commentaires: "commentaires 1"
        }]
        },
        {
        url_img: "https://picsum.photos/200/300?random=2",
        nom: "vidéo 2",
        description: "description film 2",
        code: 2,
        categories: CATEGORIES[1],
        auteur: AUTEURS[2],
        date: new Date("01-10-1996"),
        duree: 60,
        vues: 100,
        score: -7000,
        closedcaption: false,
        subtitle: true,
        avis:[{
            note: 1,
            commentaires: "commentaires 2"
        }]
        },
        {
        url_img: "https://picsum.photos/200/300?random=3",
        nom: "vidéo 3",
        description: "description film 3",
        code: 3,
        categories: CATEGORIES[4],
        auteur: AUTEURS[4],
        date: new Date("07-12-2020"),
        duree: 60,
        vues: 100,
        score: 4500,
        closedcaption: true,
        subtitle: false,
        avis:[{
            note: 8,
            commentaires: "commentaires 3"
        }]
        },
        {
        url_img: "https://picsum.photos/200/300?random=4",
        nom: "vidéo 4",
        description: "description film 4",
        code: 4,
        categories: CATEGORIES[3],
        auteur: AUTEURS[0],
        date: new Date("11-11-1988"),
        duree: 60,
        vues: 100,
        score: 3500,
        closedcaption: false,
        subtitle: false,
        avis:[{
            note: 7,
            commentaires: "commentaires 4"
        }]
        },
        {
            url_img: "https://picsum.photos/200/300?random=5",
            nom: "vidéo 5",
            description: "description film 5",
            code: 5,
            categories: CATEGORIES[1],
            auteur: AUTEURS[4],
            date: new Date("01-15-2008"),
            duree: 60,
            vues: 120,
            score: 7500,
            closedcaption: false,
            subtitle: false,
            avis:[{
                note: 10,
                commentaires: "commentaires 5"
            }]
        },
        {
            url_img: "https://picsum.photos/200/300?random=6",
            nom: "vidéo 6",
            description: "description film 6",
            code: 6,
            categories: CATEGORIES[3],
            auteur: AUTEURS[3],
            date: new Date("04-04-2015"),
            duree: 180,
            vues: 330,
            score: 2500,
            closedcaption: false,
            subtitle: false,
            avis:[{
                note: 3,
                commentaires: "commentaires 6"
            }]
            }
];