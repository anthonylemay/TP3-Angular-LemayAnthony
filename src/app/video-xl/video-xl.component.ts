import { Component, Input } from '@angular/core';
import {Video} from '../video'
import { CATEGORIES } from '../mock-categories';
import { AUTEURS } from '../mock-auteurs';

@Component({
  selector: 'app-video-xl',
  templateUrl: './video-xl.component.html',
  styleUrls: ['./video-xl.component.scss']
})
export class VideoXlComponent {
  @Input() video: Video = {
    url_img: "",
    nom: "Aucun Nom",
    description: "Aucune Description",
    code: "N/A",
    categories: CATEGORIES[6],
    auteur: AUTEURS[6],
    date: new Date,
    duree: 0,
    closedcaption: false,
    subtitle: false,
    score: 0,
    vues: 0,
    avis:[{
      auteur: AUTEURS[6],
      note: 0,
      commentaires: "Aucuns Commentaires Trouvés"
    }]
  };
}