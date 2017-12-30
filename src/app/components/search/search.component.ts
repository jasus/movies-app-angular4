import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search:string = '';
  movies:any[] = [];

  constructor( public moviesService:MoviesService) { }

  ngOnInit() {
  }

  searchMovie(){
    if ( this.search.length == 0 ) {
      return;
    }

    this.moviesService.searchMovie( this.search )
      .subscribe(res => this.movies = res.results);
  }

}
