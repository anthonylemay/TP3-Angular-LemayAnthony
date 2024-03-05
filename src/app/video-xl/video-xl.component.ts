import { Component, Input, OnInit } from '@angular/core';
import { Video, Auteur, Categorie, Avis } from '../video';

@Component({
  selector: 'app-video-xl',
  templateUrl: './video-xl.component.html',
  styleUrls: ['./video-xl.component.scss']
})
export class VideoXlComponent implements OnInit {
  
  @Input() videoInput?: Partial<Video>;

  video: Video;

  constructor() {
    this.video = this.getDefaultVideo();
  }

  ngOnInit(): void {
    this.video = { ...this.getDefaultVideo(), ...this.videoInput };
  }

  getDefaultVideo(): Video {
    return {
      id: 0,
      url_img: 'ImageURL',
      nom: 'Nom Vidéo',
      description: 'Description Vidéo',
      code: 'N/A',
      categorie: { id: 0, nom: 'Categorie' },
      auteur: {
        id: 0,
        nom: 'Auteur',
        pseudo: 'Pseudo',
        verifie: false,
        description: 'Description Auteur',
        url_pic: 'AvatarURL',
        coordonnees: {
          id: 0,
          courriel: '',
          facebook: '',
          instagram: '',
          twitch: '',
          site_web: '',
        }
      },
      date: new Date(),
      duree: 0,
      vues: 0,
      score: 0,
      closedcaption: false,
      subtitle: false,
      avis: [{
        auteur: {
          id: 0,
          nom: 'Anonyme',
          pseudo: 'Anonyme',
          verifie: false,
          description: ' Description',
          url_pic: 'AvatarURL',
          coordonnees: {
            id: 0,
            courriel: '',
            facebook: '',
            instagram: '',
            twitch: '',
            site_web: '',
          }
        },
        note: 0,
        commentaires: 'Commentaire',
        reaction: null,
        date: new Date()
      }]
    };
  }
}