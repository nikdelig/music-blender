import { AppActionTypes } from './app.actions';
import { State } from '@ngrx/store';

interface AppState {
  key: number;
}

export function reducer(state: State<AppState>, action: AppActionTypes): State<AppState> {
  switch (action.type) {
    case AppActionTypes.ACTION: {
      console.log('first action');
    }

    case AppActionTypes.OTHER_ACTION: {
      console.log('other action');
    }

    default: {
      return state;
    }
  }
}
