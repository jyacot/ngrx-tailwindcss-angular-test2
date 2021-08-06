import { ActionReducerMap } from '@ngrx/store';
import { Person } from './store/people/person.model';
import { personReducer } from './store/people/person.reducer';

export interface AppState {
  person: Person[];
}

export const appReducers: ActionReducerMap<AppState> = {
  person: personReducer,
};
