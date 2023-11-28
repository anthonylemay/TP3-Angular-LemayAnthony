import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-v-img',
  templateUrl: './v-img.component.html',
  styleUrls: ['./v-img.component.scss']
})
export class VImgComponent {
  @Input() url_img: string = "";
  @Input() closedcaption: boolean = false;
  @Input() subtitle: boolean = false;
}
