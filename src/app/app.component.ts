import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addPerson } from './store/people/person.actions';
import { person, Person } from './store/people/person.model';

import { personReducer } from './store/people/person.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  peoples: Person[];
  constructor(private store: Store<{ person: Person[] }>) {
    this.peoples = [];
  }

  ngOnInit() {
    this.store.select('person').subscribe((v) => {
      this.peoples = v;
    });

    const newPerson = new person(
      { first: 'Julio', last: 'Yacot', title: 'Sr' },
      'jyacot@gmail.com',
      {
        large: '',
        medium: '',
        thumbnail: '',
      }
    );
  }
}
