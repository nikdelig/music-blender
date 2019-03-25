import { AudioPlayerModule } from './audio-player/audio-player.module';
import { PlaylistModule } from './playlist/playlist.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { PlaylistComponent } from './playlist/playlist.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    NoopAnimationsModule,
    AppRoutingModule,
    PlaylistModule,
    AudioPlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
