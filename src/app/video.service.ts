import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video';
import { Categorie } from './categorie';

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
  fetchCategories() {
    fetch(`${this.API_URL}categories`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Fetch error:', error));
  }
  
  
  
  

  
}
