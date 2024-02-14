import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { EarthMagicComponent } from './concerts/earth-magic/earth-magic.component';
import { HomeComponent } from './home/home.component';
import { UpcomingShowsComponent } from './concerts/upcoming-shows/upcoming-shows.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { AddConcertComponent } from './add-concert/add-concert.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tour', component: EarthMagicComponent},
  {path: 'upcoming-shows', component: UpcomingShowsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'news-media', component: MediaComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AddConcertComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  
  exports: [RouterModule]
})

export class AppRoutingModule { }
