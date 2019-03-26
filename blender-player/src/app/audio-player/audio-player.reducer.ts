import { AudioPlayer } from './../models/audio-player.model';
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

export const getAudioPlayerState = (state: State) => state.audioPlayer;
export const getAudioPlayerLoading = (state: State) => state.audioPlayerLoading;
