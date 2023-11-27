import {Auteur } from "./auteur";

export const AUTEURS: Auteur[] = [
    {   pseudo:"billyBob",
        nom: "Bob billy",
        verifie: false,
        coordonnees:[{
            courriel: "bobbilly@gmail.com",
            facebook: "https://facebook.com/bobbilly",
            instagram: "https://instagram.com/bobbilly",
            twitch: "https://www.twitch.tv/bobbilly",
            site_web: "https://bobbilly.com"
        }],
        description: "Bob from Quebec"
    },
    {  pseudo:"MaryGang",
    nom: "Mary Jane",
    verifie: true,
    coordonnees:[{
        courriel: "mary420@gmail.com",
        facebook: "https://facebook.com/mjgang",
        instagram: "https://instagram.com/mjgangsta",
        twitch: "https://www.twitch.tv/maryj",
        site_web: "https://420.com"
    }],
    description: "Love Mary"
    },
    {  pseudo:"LeoNaldo88",
    nom: "Leo Naldo",
    verifie: true,
    coordonnees:[{
        courriel: "lnaldo88@gmail.com",
        facebook: "https://facebook.com/leonaldo",
        instagram: "https://instagram.com/leodicapo",
        twitch: "https://www.twitch.tv/leleo",
        site_web: "https://entreprisesJ.com"
    }],
    description: "Leo from Italy, hello world!"
    },
    {  pseudo:"CocoBongo",
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
    {  pseudo:"debugDuck",
    nom: "Dean Duckster",
    verifie: false,
    coordonnees:[{
        courriel: "yellowfever@gmail.com",
        facebook: "https://facebook.com/deanduck",
        instagram: "https://instagram.com/deanduck",
        twitch: "https://www.twitch.tv/deantheduck",
        site_web: ""
    }],
    description: "The debug duck knows no limits."
    }
]