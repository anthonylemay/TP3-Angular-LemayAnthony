import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-code',
  templateUrl: './v-code.component.html',
  styleUrls: ['./v-code.component.scss']
})
export class VCodeComponent {
  @Input() code: string = "N/A";
}
