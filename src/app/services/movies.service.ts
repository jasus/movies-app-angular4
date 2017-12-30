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

  // GET - Get new releases
  getNewReleases (): Observable<any> {

    let from = new Date();
    let to = new Date();
    to.setDate( to.getDate() + 7 );

    let fromStr = `${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}`;
    let toStr = `${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}`;

    return this.http
      .get(`${environment.apiURL}/discover/movie?primary_release_date.gte=${fromStr}&primary_release_date.lte=${toStr}&api_key=${environment.apiKey}&language=es`);
  }

  // GET - Get new kids releases
  getPopularKidsMovies (): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${environment.apiKey}&language=es`);
  }

  // GET - Search movie
  searchMovie ( text: string ): Observable<any> {
    return this.http
      .get(`${environment.apiURL}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${environment.apiKey}&language=es`);
  }
}
