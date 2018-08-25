import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { empty, Observable } from 'rxjs';
import { AppEffects } from './app.effects';

describe('AuthEffects', () => {
    let effects: AppEffects;
    let actions$: Observable<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AppEffects,
                provideMockActions(() => actions$),
            ],
        });

        effects = TestBed.get(AppEffects);
        actions$ = TestBed.get(Actions);
    });

    describe('login$', () => {
        it('should return an auth.LoginSuccess action, with user information if login succeeds', () => {
            // expect(effects.login$).toBeObservable(expected);
        });
    });
});
