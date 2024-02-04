import { Component, Input } from '@angular/core';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-v-vues',
  templateUrl: './v-vues.component.html',
  styleUrls: ['./v-vues.component.scss']
})
export class VVuesComponent {
  @Input() vues: number = 0;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = this.positionOptions[0];
  
  viewCountMapping: { [k: string]: string } = {
    '=0': '',
    '=1': 'visionnement',
    'other': 'visionnements'
  };
}
