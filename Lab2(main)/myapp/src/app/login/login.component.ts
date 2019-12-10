import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  showLoginError = false;

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  validateLogin() {
    console.log("Validating login", this.email, this.password);

    //get list of all users
    var allUsers = this.data.getAllUsers();

    //validate credentials againts all users in array 
    //
    /*

    */
    var validCreds = false;

    for (var i = 0; i < allUsers.length; i++) {
      var aUser = allUsers[i];

      if (this.email == aUser.email && this.password == aUser.password) {
        console.log('Logged in!');
        validCreds = true;
        this.showLoginError = false; //hides alert
        this.router.navigate(['user/register']);

      }
    }

    if (!validCreds) {
      console.error('Invalid login!');
      this.showLoginError = true;
    }
  }
}
