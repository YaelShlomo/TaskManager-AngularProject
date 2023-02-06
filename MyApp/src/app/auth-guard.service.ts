import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  someCondition: boolean = false;

  canActivate(): boolean {
    if (this.someCondition) {
      this.someCondition = false;
      return true;
    }
    alert("you can not enter to this route")
    this.someCondition = true;
    return false;
  }

  constructor() { }
}
