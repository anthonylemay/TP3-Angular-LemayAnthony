import {Component, Input} from '@angular/core';
import {AUTEURS} from '../mock-auteurs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  auteur = AUTEURS[0];
}
