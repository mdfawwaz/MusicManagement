import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecentComponent } from './recent/recent.component';
import { SearchComponent } from './search/search.component';
import { SongListComponent } from './song-list/song-list.component';
import { YourPlaylistComponent } from './your-playlist/your-playlist.component';

const routes: Routes = [
  { path: '',redirectTo : '/home',pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'song-list', component: SongListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'search', component: SearchComponent }, // Create a SearchComponent
  { path: 'recent', component: RecentComponent }, // Create a RecentComponent
  { path: 'categories', component: CategoriesComponent }, // Create a CategoriesComponent
  { path: 'favorites', component: FavoritesComponent }, // Create a FavoritesComponent
  { path: 'your-playlist', component: YourPlaylistComponent } // Create a YourPlaylistComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
