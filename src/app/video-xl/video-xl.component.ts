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
    id: 0,
    url_img: "",
    nom: "Aucun Nom",
    description: "Aucune Description",
    code: "N/A",
    categorie: CATEGORIES[0],
    auteur: AUTEURS[6],
    date: new Date,
    duree: 0,
    closedcaption: false,
    subtitle: false,
    score: 0,
    vues: 0,
    avis:[{
      auteur: AUTEURS[6],
      id: 0,
      reaction: null, // s'assurer que ca fonctionne avec un enum. neutre au lieu de 0
      date: null,
      note: 0,
      commentaires: "Aucuns Commentaires Trouvés"
    }]
  };

// pour get par ID pour la page dédiée:

  /*getVideoById(): void{ // fonction qui permet de get le ID du video target. Je dois valider si je dois aussi aller get cet info au niveau plus haut, pour que les paramètres suivent.
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.videoService.getVideoById(id)
        .subscribe(result => {console.log(result); this.video = result});
    }
  } */

}