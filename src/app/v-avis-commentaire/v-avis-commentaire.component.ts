import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-avis-commentaire',
  templateUrl: './v-avis-commentaire.component.html',
  styleUrls: ['./v-avis-commentaire.component.scss']
})
export class VAvisCommentaireComponent {
  @Input() commentaire: string = "Aucuns commentaires";
}
