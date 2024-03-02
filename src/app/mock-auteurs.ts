import {Auteur } from "./auteur";

export const AUTEURS: Auteur[] = [
    {
        id: 1,
        pseudo:"billyBob",
        url_pic: "https://api.dicebear.com/7.x/thumbs/svg?seed=Dusty",
        nom: "Bob billy",
        verifie: true,
        coordonnees:[{
            courriel: "bobbilly@gmail.com",
            facebook: "https://facebook.com/bobbilly",
            instagram: "https://instagram.com/bobbilly",
            twitch: "https://www.twitch.tv/bobbilly",
            site_web: "https://bobbilly.com"
        }],
        description: "Bob de Québec"
    },
    { 
        id: 2,
        pseudo:"MaryGang",
    nom: "Mary Jane",
    url_pic: "https://api.dicebear.com/7.x/thumbs/svg?seed=Garfield",
    verifie: true,
    coordonnees:[{
        courriel: "mary420@gmail.com",
        facebook: "https://facebook.com/mjgang",
        instagram: "https://instagram.com/mjgangsta",
        twitch: "https://www.twitch.tv/maryj",
        site_web: "https://420.com"
    }],
    description: "Mange Prie Aime"
    },
    { 
        id: 3,
        pseudo:"LeoNaldo88",
    url_pic: "https://api.dicebear.com/7.x/thumbs/svg?seed=Daisy",
    nom: "Leo Naldo",
    verifie: true,
    coordonnees:[{
        courriel: "lnaldo88@gmail.com",
        facebook: "https://facebook.com/leonaldo",
        instagram: "https://instagram.com/leodicapo",
        twitch: "https://www.twitch.tv/leleo",
        site_web: "https://entreprisesJ.com"
    }],
    description: "Leo d'Italie, bonjour le monde!"
    },
    {   
        id: 4,
        pseudo:"CocoBongo",
    url_pic: "https://api.dicebear.com/7.x/thumbs/svg?seed=Bella",
    nom: "Corine Bangaran",
    verifie: false,
    coordonnees:[{
        courriel: "cBang23@gmail.com",
        facebook: "https://facebook.com/corineb",
        instagram: "https://instagram.com/cocobango",
        twitch: "",
        site_web: ""
    }],
    description: ""
    },
    {  id:5,
        pseudo:"debugDuck",
    url_pic: "https://api.dicebear.com/7.x/thumbs/svg?seed=Boots",
    nom: "Dean Duckster",
    verifie: false,
    coordonnees:[{
        courriel: "yellowfever@gmail.com",
        facebook: "https://facebook.com/deanduck",
        instagram: "https://instagram.com/deanduck",
        twitch: "https://www.twitch.tv/deantheduck",
        site_web: ""
    }],
    description: "Le canard jaune de debug ne connaît pas de limites."
    }
]