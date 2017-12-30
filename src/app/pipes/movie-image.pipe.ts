import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform( movie: any ): any {

    let image = 'http://image.tmdb.org/t/p/w500';
    if ( movie.backdrop_path ) {
      image += movie.backdrop_path;
    }else if ( movie.poster_path ) {
      image += movie.poster_path;
    }else {
      image += 'assets/img/no-image.jpg';
    }

    return image;
  }

}
