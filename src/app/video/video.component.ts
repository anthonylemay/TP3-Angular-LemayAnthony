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
    url_img: "",
    nom: "Aucun Nom",
    description: "Aucune Description",
    code: 0,
    categories: CATEGORIES[6],
    auteur: AUTEURS[6],
    date: new Date,
    duree: 0,
    closedcaption: false,
    subtitle: false,
    score: 0,
    vues: 0,
    avis:[{
      note: 0,
      commentaires: "Aucuns Commentaires Trouvés"
    }]
  };
}