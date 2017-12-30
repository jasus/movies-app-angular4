import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService {

  constructor(  private http: HttpClient ) { }

  // GET - Get popular movies
  getPopularMovies (): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/discover/movie?sort_by=popularity.desc&api_key=${environment.apiKey}&language=es`);
  }

  // GET - Search movie
  searchMovie ( text: string ): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/search/movie?query=${text}sort_by=popularity.desc&api_key=${environment.apiKey}&language=es`);
  }
}
