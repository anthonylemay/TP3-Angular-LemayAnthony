import { Component } from '@angular/core';
import{VIDEOS} from '../mock-videos';
import { Video } from '../video';
@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.scss']
})
export class ListeVideosComponent {

  videos: Video[] = VIDEOS;

}
