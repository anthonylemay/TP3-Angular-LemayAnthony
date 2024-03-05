import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video';
import { Categorie } from './video';
import { Auteur } from './video';
import { VideoSubmission } from './video-submission';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  API_URL='http://localhost/Prog-Web-3/api-videos-tp3/'
  constructor(private http: HttpClient) { }

  getVideos() : Observable <Video[]> {
    return this.http.get<Video[]>(this.API_URL);
  }
  getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.API_URL}`+`?id=`+`${id}`);
  }

  addVideo(video:VideoSubmission): Observable<void> {
    return this.http.post<void>(this.API_URL, video, httpOptions);
  }

    updateVideo(id: number,video: VideoSubmission): Observable<void> {
    return this.http.put<void>(`${this.API_URL}`+`?id=`+`${id}`, video, httpOptions);
  }

  deleteVideo(id: string): Observable<void> {
    console.log(`${this.API_URL}${id}`);
    return this.http.delete<void>(`${this.API_URL}`+`?id=`+`${id}`, httpOptions);
  }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.API_URL}categories/`);
  }

  getAuteurs(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(`${this.API_URL}auteurs/`);
  }
  
}
