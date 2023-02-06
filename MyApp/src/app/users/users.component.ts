import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_USERS, User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  users: User[] = APP_USERS;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToTasks(id: number) {
    this._router.navigate(['/tasks/' , id]);
  }
}
