import { Component, Input } from '@angular/core';
import {Video} from '../video'
import { CATEGORIES } from '../mock-categories';
import { AUTEURS } from '../mock-auteurs';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @Input() video: Video = {
    nom: "",
    description: "",
    code: 0,
    categories: CATEGORIES[6],
    auteur: AUTEURS[6],
    date: new Date,
    duree: 0,
    vues: 0,
    avis:[{
      note: 0,
      commentaires: ""
    }]
  };
}