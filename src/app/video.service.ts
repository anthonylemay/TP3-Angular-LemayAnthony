import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video';
import { Categorie } from './categorie';

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
  
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.API_URL}categories/`);
  }

  addVideo(video:Video): Observable<void> {
    return this.http.post<void>(this.API_URL, video, httpOptions);
  }

  updateVideo(video: Video): Observable<void> {
    return this.http.put<void>(`${this.API_URL}/${video.id}`, video, httpOptions);
  }


  deleteVideo(id: string): Observable<void> {
    console.log(`${this.API_URL}\\${id}`);
    return this.http.delete<void>(`${this.API_URL}/${id}`, httpOptions);
  }

  
}
