import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListadevideosComponent } from './listadevideos/listadevideos.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';

const rutasApp = [
  {path: 'lista-video', component: ListadevideosComponent },
  {path: 'video-player', component: VideoPlayerComponent},
  // Añadimos una nueva ruta para video-player para que no falle la ruta y tenga soporte 
  {path: 'video-player/:videoID', component: VideoPlayerComponent},
  {path: '' , redirectTo: 'lista-video', pathMatch: 'full' }, 
  {path: '**', component: ListadevideosComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadevideosComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutasApp) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
