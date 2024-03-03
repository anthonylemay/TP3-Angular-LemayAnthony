import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  API_URL='http://localhost/Prog-Web-3/api-videos-tp3/'
  constructor(private http: HttpClient) { }

  getVideos() : Observable <Video[]> {
    return this.http.get<Video[]>(this. API_URL);
  }
}
