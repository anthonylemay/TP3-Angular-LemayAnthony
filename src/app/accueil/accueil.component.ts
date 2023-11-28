import { Component } from '@angular/core';
import {VIDEOS} from '../mock-videos';
import {Video} from '../video';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  selectedVideo: Video = VIDEOS[0]
}
