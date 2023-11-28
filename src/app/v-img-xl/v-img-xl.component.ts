import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-v-img-xl',
  templateUrl: './v-img-xl.component.html',
  styleUrls: ['./v-img-xl.component.scss']
})
export class VImgXlComponent {
  @Input() url_img: string = "";
  @Input() closedcaption: boolean = false;
  @Input() subtitle: boolean = false;
}
