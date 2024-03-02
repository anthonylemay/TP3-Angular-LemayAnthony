import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-categorie',
  templateUrl: './v-categorie.component.html',
  styleUrls: ['./v-categorie.component.scss']
})
export class VCategorieComponent {
  @Input() categorie_id: number = 0;
}
