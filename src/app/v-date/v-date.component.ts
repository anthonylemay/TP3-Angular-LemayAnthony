import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-date',
  templateUrl: './v-date.component.html',
  styleUrls: ['./v-date.component.scss']
})
export class VDateComponent {
  @Input() date: Date = new Date;
}
