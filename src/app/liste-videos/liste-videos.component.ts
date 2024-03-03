import { Component, Input } from '@angular/core';
import{VIDEOS} from '../mock-videos';
import { Video } from '../video';
import {AUTEURS} from '../mock-auteurs';
import {CATEGORIES} from '../mock-categories';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.scss']
})
export class ListeVideosComponent {

  videos: Video[] = [];

  constructor (private videoService : VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideos()
    .subscribe(resultat => this.videos = resultat);
  }


  @Input() video: Video = {
    id: 0,
    url_img: "",
    nom: "",
    description: "",
    code: "N/A",
    categorie: CATEGORIES[0],
    auteur: AUTEURS[6],
    date: new Date,
    duree: 0,
    vues: 0,
    score: 0,
    closedcaption: false,
    subtitle: false,
    avis:[{
      id: 0,
      auteur: AUTEURS[6],
      note: 0,
      reaction: null,
      date: null,
      commentaires: ""
    }]
  };

}
