import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-vues',
  templateUrl: './v-vues.component.html',
  styleUrls: ['./v-vues.component.scss']
})
export class VVuesComponent {
  @Input() vues: number = 0;

}
