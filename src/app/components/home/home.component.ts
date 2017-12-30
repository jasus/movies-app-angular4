import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  releases: any;

  constructor( public moviesService: MoviesService) {

    this.moviesService.getNewReleases()
      .subscribe(res => this.releases = res.results);

  }

  ngOnInit() {
  }

}
