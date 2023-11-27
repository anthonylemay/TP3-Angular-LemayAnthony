import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-auteur',
  templateUrl: './v-auteur.component.html',
  styleUrls: ['./v-auteur.component.scss']
})
export class VAuteurComponent {
  @Input() pseudo: string = "Aucun Auteur Trouvé";
}
