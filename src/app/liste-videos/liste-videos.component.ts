import { Component, Input } from '@angular/core';
import{VIDEOS} from '../mock-videos';
import { Video } from '../video';
import {AUTEURS} from '../mock-auteurs';
import {CATEGORIES} from '../mock-categories';
import { VideoService } from '../video.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.scss']
})
export class ListeVideosComponent {
  videos: Video[] = [];
  categories: Categorie[] = [];
  filteredVideos: Video[] = [];
  
  constructor(private videoService: VideoService) {}
  
  ngOnInit(): void {
    this.getVideos();
    this.getCategories();
  }
  
  getVideos(): void {
    this.videoService.getVideos().subscribe(resultat => {
      this.videos = resultat;
      this.filteredVideos = resultat; 
    });
  }
  
  getCategories(): void {
    this.videoService.getCategories().subscribe(resultat => this.categories = resultat);
  }
  
  filterVideosByCategory(categoryId: number | null): void {
    if (categoryId) {
      this.filteredVideos = this.videos.filter(v => v.categorie.id === categoryId);
    } else {
      this.filteredVideos = [...this.videos]; // Reset to all videos
    }
  }
  
  

}
