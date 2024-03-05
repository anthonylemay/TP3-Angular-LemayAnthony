import { Component } from '@angular/core';
import { Avis, Reaction } from '../avis';

@Component({
  selector: 'app-ajout-avis',
  templateUrl: './ajout-avis.component.html',
  styleUrls: ['./ajout-avis.component.scss']
})
export class AjoutAvisComponent {

  avis: Avis = {
    video_id: 0,
    auteur_id: 0,
    reaction: null,
    commentaires: "",
    note: 0,
    date: new Date()
  };

  like() {
    this.avis.reaction = Reaction.Like;
  }

  dislike() {
    this.avis.reaction = Reaction.Dislike;
  }

  submit() {
    this.avis.date = new Date();
    const dataToSend = {
      ...this.avis,
      date: this.avis.date.toISOString().replace('T', ' ').substring(0, 19) // Conversion en str pour avoir les secondes.
    }; 

    console.log(this.avis);
    // ajout des focntionnalités de push sur le back dans un deuxième temps.
  }
}
