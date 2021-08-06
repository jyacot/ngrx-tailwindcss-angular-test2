import { Action, createReducer, on } from '@ngrx/store';
import { Person } from './person.model';

import * as actions from './person.actions';

const initialState: Person[] = [];

const _personReducer = createReducer(
  initialState,
  on(actions.addPerson, (state, person: Person) => [...state, person]),

  on(actions.removePerson, (state, { id }) =>
    state.filter((person) => person.id !== id)
  )
);

export function personReducer(state: Person[] | undefined, action: Action) {
  return _personReducer(state, action);
}
