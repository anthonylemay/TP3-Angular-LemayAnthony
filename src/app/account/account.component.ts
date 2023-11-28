import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  @Input() nom: string = "Aucun Utilisateur";
  @Input() pseudo: string = "Aucun pseudo";
  @Input() url_pic: string = "";
  @Input() verifie: boolean = false;

}
