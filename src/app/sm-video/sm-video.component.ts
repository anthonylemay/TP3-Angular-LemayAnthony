import { Component, Input,  OnInit  } from '@angular/core';
import {Video} from '../video'

@Component({
  selector: 'app-sm-video',
  templateUrl: './sm-video.component.html',
  styleUrls: ['./sm-video.component.scss']
})
export class SmVideoComponent implements OnInit  {

   
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
        url_img: 'defaultImageURL',
        nom: 'Default Name',
        description: 'Default Description',
        code: 'N/A',
        categorie: { id: 0, nom: 'Default Category' },
        auteur: {
          id: 0,
          nom: 'Default Author',
          pseudo: 'DefaultPseudo',
          verifie: false,
          description: 'Default Description',
          url_pic: 'defaultAvatarURL',
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
            nom: 'Anonymous',
            pseudo: 'Anonymous',
            verifie: false,
            description: 'Default Description',
            url_pic: 'defaultAvatarURL',
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
          commentaires: 'No Comment',
          reaction: null,
          date: new Date()
        }]
      };
    }
  

    getFilmScore(score: number) : object {
      if(score > 5000) {
        return {'cardStyle': true, 'positiveFilm': true};
        }  else if (score < -5000) {
          return {'cardStyle': true, 'negativeFilm': true};
        }
        return { 'cardStyle': true};
      }
}
