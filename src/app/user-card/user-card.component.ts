import { Component, OnInit } from '@angular/core';
import { RadomuserService } from '../radomuser.service';
import { pluck } from 'rxjs/operators';
import { Person } from '../store/people/person.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  user: Person | null;
  constructor(private radomUser: RadomuserService) {
    this.user = null;
  }

  ngOnInit(): void {}

  getData() {
    this.radomUser
      .get()
      .pipe(pluck('results'))
      .subscribe((u) => {
        this.user = u[0];
        // console.log(u);
      });
  }
}
