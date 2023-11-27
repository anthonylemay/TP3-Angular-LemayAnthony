import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-nom',
  templateUrl: './v-nom.component.html',
  styleUrls: ['./v-nom.component.scss']
})
export class VNomComponent {
  @Input() nom: string = "Nom du Vidéo";
}
