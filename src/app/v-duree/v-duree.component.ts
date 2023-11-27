import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-duree',
  templateUrl: './v-duree.component.html',
  styleUrls: ['./v-duree.component.scss']
})
export class VDureeComponent {
  @Input() duree: number = 0;
}
