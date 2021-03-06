import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieManagerComponent } from './movie-manager/movie-manager.component';
import { ShowingManagerComponent } from './showing-manager/showing-manager.component';
import { TheaterManagerComponent } from './theater-manager/theater-manager.component';
import { UserManagerComponent } from './user-manager/user-manager.component';


const routes: Routes = [
  { path: 'movies', component: MovieManagerComponent},
  { path: 'theaters', component: TheaterManagerComponent},
  { path: 'shows', component: ShowingManagerComponent},
  { path: 'users', component: UserManagerComponent},
  { path: '', redirectTo: 'movies'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
