import { Component, Input } from '@angular/core';
import{VIDEOS} from '../mock-videos';
import { Video } from '../video';
import {AUTEURS} from '../mock-auteurs';
import {CATEGORIES} from '../mock-categories';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.scss']
})
export class ListeVideosComponent {

  videos: Video[] = [];

  constructor (private videoService : VideoService) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void{
    this.videoService.getVideos()
    .subscribe(resultat => this.videos = resultat)
  }


}
