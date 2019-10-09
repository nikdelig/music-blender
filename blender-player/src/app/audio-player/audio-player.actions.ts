import { Action, createAction } from '@ngrx/store';
import { Playlist } from '../models/playlist.model';
import { state } from '@angular/animations';

export const GetAudioPlayer = createAction(
  '[Audio Player] Get Audio Player', (state, {payload: Playlist}) => ({state, payload})
);
