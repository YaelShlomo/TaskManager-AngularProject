import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToUsers() {
    this._router.navigate(["/users"]);
  }

  goToTasks() {
    this._router.navigate(["/tasks"]);
  }

}
