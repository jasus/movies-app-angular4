import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public moviesService: MoviesService) {

    this.moviesService.getPopularMovies()
      .subscribe(res => console.log(res.results));

  }

  ngOnInit() {
  }

}
