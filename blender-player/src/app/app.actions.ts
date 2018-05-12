import { Action } from '@ngrx/store';

export enum AppActionTypes {
  ACTION = '[ACTION] Some',
  OTHER_ACTION = '[ACTION] Some other',
}

export class SomeAction implements Action {
  readonly type = AppActionTypes.ACTION;
}

export class SomeOtherAction implements Action {
  readonly type = AppActionTypes.OTHER_ACTION;
}

export type AppActions = SomeAction | SomeOtherAction;
