import { Playlist } from './../models/playlist.model';
import { PlaylistActionTypes, PlaylistActionsUnion } from './playlist.actions';

export interface State {
    playlistLoading: boolean;
    playlist: Playlist;
  }

  const initialState: State = {
    playlistLoading: false,
    playlist: null,
  };

export function reducer(
    state = initialState,
    action:
      | PlaylistActionsUnion
  ): State {
    switch (action.type) {
      case PlaylistActionTypes.GetPlaylist: {
        return {
          ...state,
          // playlist: [],
          playlistLoading: true,
        };
      }

      default: {
        return state;
      }
    }
  }

export const getPlaylistState = (state: State) => state.playlist;
export const getPlaylistLoading = (state: State) => state.playlistLoading;
