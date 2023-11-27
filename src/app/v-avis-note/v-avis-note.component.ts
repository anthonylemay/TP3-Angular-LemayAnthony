import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-v-avis-note',
  templateUrl: './v-avis-note.component.html',
  styleUrls: ['./v-avis-note.component.scss']
})
export class VAvisNoteComponent {
  @Input() note: number = 0;
}
