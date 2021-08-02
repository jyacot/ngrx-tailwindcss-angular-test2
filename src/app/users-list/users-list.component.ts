import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
    this.store.select('person').subscribe((p) => (this.users = p));
  }
}
