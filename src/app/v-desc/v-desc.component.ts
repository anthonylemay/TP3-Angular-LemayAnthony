import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-v-desc',
  templateUrl: './v-desc.component.html',
  styleUrls: ['./v-desc.component.scss']
})
export class VDescComponent {
  @Input() description: string = "Aucune description trouvée";

}
