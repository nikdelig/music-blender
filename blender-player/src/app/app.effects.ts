import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<any> = this.actions$.pipe(
    );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
