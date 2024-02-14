import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './navigation/side-navbar.component';
import { FooterComponent } from './navigation/footer.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { EarthMagicComponent } from './concerts/earth-magic/earth-magic.component';
import { HomeComponent } from './home/home.component';
import { UpcomingShowsComponent } from './concerts/upcoming-shows/upcoming-shows.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { MerchComponent } from './merch/merch.component';
import { environment } from './../environments/environments';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireModule } from '@angular/fire/compat'; 
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AddConcertComponent } from './add-concert/add-concert.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    FooterComponent,
    ConcertsComponent,
    SpotifyComponent,
    EarthMagicComponent,
    HomeComponent,
    UpcomingShowsComponent,
    MusicComponent,
    VideosComponent,
    MediaComponent,
    ContactComponent,
    MerchComponent,
    AddConcertComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)), provideDatabase(() => getDatabase()),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
