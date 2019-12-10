import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: User[]= [];

  constructor() {
  var user = new User();
  user.userName='Admin Account';
  user.email='admin@mail.com';
  user.password='qwerty';
  user.firstName='Admin';
  user.lastName='User';
  this.userList.push(user);
  }

  public saveUser(user: User) {
    this.userList.push(user);
  }

  public getAllUsers(){
    return this.userList;
  }

}
