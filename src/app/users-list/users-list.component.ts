import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removePerson } from '../store/people/person.actions';
import { Person } from '../store/people/person.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: Person[];
  constructor(private store: Store<{ person: Person[] }>) {
    this.users = [];
  }

  ngOnInit(): void {
    this.store.select('person').subscribe((p) => {
      this.users = p;
    });
  }

  deleteUser(user_id: number) {
    this.store.dispatch(removePerson({ id: user_id }));
  }
}
