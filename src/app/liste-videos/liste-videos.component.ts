import { Component, Input } from '@angular/core';
import{VIDEOS} from '../mock-videos';
import { Video } from '../video';
import {CATEGORIES} from '../mock-categories';
import {AUTEURS} from '../mock-auteurs';


@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.scss']
})
export class ListeVideosComponent {

  videos: Video[] = VIDEOS;

  @Input() video: Video = {
    url_img: "",
    nom: "",
    description: "",
    code: 0,
    categories: CATEGORIES[6],
    auteur: AUTEURS[6],
    date: new Date,
    duree: 0,
    vues: 0,
    score: 0,
    closedcaption: false,
    subtitle: false,
    avis:[{
      note: 0,
      commentaires: ""
    }]
  };

}
