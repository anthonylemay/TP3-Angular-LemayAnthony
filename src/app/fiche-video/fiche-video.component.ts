import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { Video } from '../video';

@Component({
  selector: 'app-fiche-video',
  templateUrl: './fiche-video.component.html',
  styleUrls: ['./fiche-video.component.scss']
})
export class FicheVideoComponent implements OnInit {

  selectedVideo: Video | null = null;

  constructor(private videoService: VideoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getVideo();
  }

  getVideo(): void {
    const id = this.route.snapshot.paramMap.get('id'); // valider la possibilité d'un null. 
    if (id) {
      this.videoService.getVideoById(+id) 
       .subscribe(resultat => this.selectedVideo = resultat);
    }
  }
}
