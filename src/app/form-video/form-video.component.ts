import { Component } from '@angular/core';
import { Video } from '../video';
import { Avis } from '../avis';
 
@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.scss']
})
export class FormVideoComponent {

  formVideo: Video = {
    id: 0,
    url_img: "",
    nom: "",
    description: "",
    code: "",
    categorie_id: 0,
    auteur: { // Ici va falloir que je regarde si je met une fonction pour aller chercher les infos de l'usager qui est connecté. 
      id: 0,
      url_pic: "",
      nom: "",
      pseudo: "",
      verifie: false,
      coordonnees: [{
        courriel: "",
        facebook: "",
        instagram: "",
        twitch: "",
        site_web: ""
      }],
      description: "",
    },
    date: new (Date),
    duree: 0,
    closedcaption: false,
    subtitle: false,
    score: 0,
    vues: 0,
    avis:[{
        id: 0,
        reaction: null,
        date: null,
        note: 0,
        commentaires: "",
        auteur:{
          id: 0,
          url_pic: "",
          nom:"",
          pseudo: "",
          verifie: false,
          coordonnees: [{
            courriel: "",
            facebook: "",
            instagram: "",
            twitch: "",
            site_web: ""
          }],
          description: ""
        }
        }]
  };

  submit(){
    console.log(this.formVideo)
  }



}
