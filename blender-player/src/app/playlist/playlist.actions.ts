import { Action } from '@ngrx/store';
import { Playlist } from '../models/playlist.model';

export enum PlaylistActionTypes {
  GetPlaylist = '[Playlist] Get Playlist',
}

export class LoadPlaylist implements Action {
  readonly type = PlaylistActionTypes.GetPlaylist;

  constructor(public payload: Playlist) {}
}

export type PlaylistActionsUnion = LoadPlaylist;
