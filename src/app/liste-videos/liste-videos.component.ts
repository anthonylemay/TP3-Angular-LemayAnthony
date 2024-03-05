import { Component, Input } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.scss']
})
export class ListeVideosComponent {
  video: Video[] = [];
  categories: Categorie[] = [];
  filteredVideos: Video[] = [];
  
  constructor(private videoService: VideoService) {}
  
  
  ngOnInit(): void {
    this.getVideos();
    this.getCategories();
  }
  
  getVideos(): void {
    this.videoService.getVideos().subscribe(resultat => {
      this.video = resultat;
      this.filteredVideos = resultat; 
    });
  }

  getCategories(): void {
    this.videoService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  

  filterVideosByCategory(categoryId: number | null ): void {
    if (categoryId) {
      this.filteredVideos = this.video.filter(v => v.categorie.id === categoryId);
    } else {
      this.filteredVideos = [...this.video]; // Reset à tout voir
    }
  }
  
  

}
