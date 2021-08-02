import { createAction, props } from '@ngrx/store';
import { Person } from './person.model';

export const addPerson = createAction('[Person] AddPerson', props<Person>());
export const removePerson = createAction(
  '[Person] RemovePerson',
  props<{ index: number }>()
);
