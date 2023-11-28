import { Component, Input } from '@angular/core';
import {Auteur} from '../auteur';

@Component({
  selector: 'app-v-auteur',
  templateUrl: './v-auteur.component.html',
  styleUrls: ['./v-auteur.component.scss']
})
export class VAuteurComponent {
  @Input() pseudo: string = "Aucun Auteur Trouvé";
  @Input() verifie: boolean = false;
}
