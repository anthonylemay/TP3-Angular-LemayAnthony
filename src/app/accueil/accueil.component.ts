import { Component, Input } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent{

  videos: Video[] = [];
  popularVideos: Video[] = [];
  
  constructor(private videoService: VideoService) {}
  
  ngOnInit(): void {
    this.getVideos();
  }
  
  getVideos(): void {
    this.videoService.getVideos().subscribe(resultat => {
      this.videos = resultat;
      this.popularVideos = resultat.filter(video => video.score >= 5000);
    });
  }

  


}
