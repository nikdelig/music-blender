import { AudioPlayer } from './../models/audio-player.model';
import { Playlist } from './../models/playlist.model';
import { AudioPlayerActionTypes, AudioPlayerActionsUnion } from './audio-player.actions';

export interface State {
    audioPlayerLoading: boolean;
    audioPlayer: AudioPlayer;
  }

  const initialState: State = {
    audioPlayerLoading: false,
    audioPlayer: null,
  };

export function reducer(
    state = initialState,
    action:
      | AudioPlayerActionsUnion
  ): State {
    switch (action.type) {
      case AudioPlayerActionTypes.GetPlaylist: {
        return {
          ...state,
          // audioPlayer: [],
          audioPlayerLoading: true,
        };
      }

      default: {
        return state;
      }
    }
  }

export const getPlaylistState = (state: State) => state.audioPlayer;
export const getPlaylistLoading = (state: State) => state.audioPlayerLoading;
