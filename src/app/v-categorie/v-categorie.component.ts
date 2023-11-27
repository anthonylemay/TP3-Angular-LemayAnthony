import { Component, Input } from '@angular/core';
import { Categorie } from '../video';

@Component({
  selector: 'app-v-categorie',
  templateUrl: './v-categorie.component.html',
  styleUrls: ['./v-categorie.component.scss']
})
export class VCategorieComponent {
  @Input() categorie: Categorie = { nom: '' };
}
