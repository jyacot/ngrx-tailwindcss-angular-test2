import { Component, OnInit } from '@angular/core';
import { RadomuserService } from '../radomuser.service';
import { pluck } from 'rxjs/operators';
import { person, Person } from '../store/people/person.model';
import { Store } from '@ngrx/store';
import * as actions from '../store/people/person.actions';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  user: Person | null;
  constructor(
    private radomUser: RadomuserService,
    private store: Store<{ person: Person[] }>
  ) {
    this.user = null;
  }

  ngOnInit(): void {
    this.store.select('person').subscribe((v) => {
      if (v.length < 1) {
        this.getData();
      }
    });
  }

  getData() {
    this.radomUser
      .get()
      .pipe(pluck('results'))
      .subscribe((u) => {
        const newPerson = new person(u[0].name, u[0].email, u[0].picture);
        this.user = newPerson.data();
        // console.log(u);
      });
  }

  addPerson(user: Person) {
    this.store.dispatch(actions.addPerson(user));
    this.getData();
  }
}
