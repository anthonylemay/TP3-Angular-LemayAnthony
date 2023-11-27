import {Video} from "./video";
import {CATEGORIES} from "./mock-categories";
import {AUTEURS} from "./mock-auteurs";


export const VIDEOS: Video[] =[
    {nom: "vidéo 1",
        description: "description film 1",
        code: 1,
        categories: CATEGORIES[0],
        auteur: AUTEURS[0],
        date: new Date("02-11-2003"),
        duree: 60,
        vues: 100,
        avis:[{
            note: 10,
            commentaires: "commentaires 1"
        }]
        },
        {nom: "vidéo 2",
        description: "description film 2",
        code: 1,
        categories: CATEGORIES[1],
        auteur: AUTEURS[3],
        date: new Date("29-10-1996"),
        duree: 60,
        vues: 100,
        avis:[{
            note: 10,
            commentaires: "commentaires 2"
        }]
        },
        {nom: "vidéo 3",
        description: "description film 3",
        code: 1,
        categories: CATEGORIES[0],
        auteur: AUTEURS[0],
        date: new Date("07-12-2020"),
        duree: 60,
        vues: 100,
        avis:[{
            note: 10,
            commentaires: "commentaires 3"
        }]
        },
        {nom: "vidéo 4",
        description: "description film 4",
        code: 1,
        categories: CATEGORIES[0],
        auteur: AUTEURS[0],
        date: new Date("11-10-1998"),
        duree: 60,
        vues: 100,
        avis:[{
            note: 10,
            commentaires: "commentaires 4"
        }]
        }
];