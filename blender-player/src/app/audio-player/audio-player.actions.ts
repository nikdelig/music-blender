import { Action } from '@ngrx/store';
import { Playlist } from '../models/playlist.model';

export enum AudioPlayerActionTypes {
  GetPlaylist = '[Audio Player] Get Audio Player',
}

export class GetAudioPlayer implements Action {
  readonly type = AudioPlayerActionTypes.GetPlaylist;

  constructor(public payload: Playlist) {}
}

export type AudioPlayerActionsUnion = GetAudioPlayer;
