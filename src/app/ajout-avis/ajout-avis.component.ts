import { Component } from '@angular/core';
import { AjoutAvis } from '../ajout-avis';

@Component({
  selector: 'app-ajout-avis',
  templateUrl: './ajout-avis.component.html',
  styleUrls: ['./ajout-avis.component.scss']
})
export class AjoutAvisComponent {

  ajoutavis: AjoutAvis = {

    like: false,
    dislike: false,
    commentaire: "",

  };

  like(){
    this.ajoutavis.like = true;
  }

  dislike(){
    this.ajoutavis.dislike = true;
  }

  submit(){
    console.log(this.ajoutavis)
  }

}
