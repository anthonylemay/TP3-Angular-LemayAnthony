import { Component } from '@angular/core';
import { Avis, Reaction } from '../avis'; // Ensure Reaction enum is exported and imported correctly

@Component({
  selector: 'app-ajout-avis',
  templateUrl: './ajout-avis.component.html',
  styleUrls: ['./ajout-avis.component.scss']
})
export class AjoutAvisComponent {
  // Initial state with reaction set to null
  ajoutavis: Avis = {
    id: 0, // Assuming a temporary placeholder ID
    auteur: {
      id: 0, // Placeholder, assuming you'll replace with the actual auteur's data
      url_pic: "",
      nom: "",
      pseudo: "",
      verifie: false,
      coordonnees: {
        courriel: "",
        facebook: "",
        instagram: "",
        twitch: "",
        site_web: ""
      },
      description: "",
    },
    note: 0,
    commentaires: "",
    reaction: null,
    date: null // va être push à la datetime actuelle.
  };

  like() {
    this.ajoutavis.reaction = Reaction.Like;
  }

  dislike() {
    this.ajoutavis.reaction = Reaction.Dislike;
  }

  submit() {
    this.ajoutavis.date = new Date();
    const dataToSend = {
      ...this.ajoutavis,
      date: this.ajoutavis.date.toISOString().replace('T', ' ').substring(0, 19) // Conversion en str pour avoir les secondes.
    }; // à valider si ca fonctionne sur le backend pour le time avec date. 

    console.log(this.ajoutavis);
    // ajout des focntionnalités de push sur le back
  }
}