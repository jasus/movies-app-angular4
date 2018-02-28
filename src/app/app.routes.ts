import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: {value:'home'} } },
  { path: 'movie', component: MovieComponent, data: { animation: {value:'movie'} } },
  { path: 'search', component: SearchComponent, data: { animation: {value:'search'} } },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
