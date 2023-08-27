import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})


export class AccountComponent implements OnInit {
  // Profile data
  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('birthdate');
  age = sessionStorage.getItem('age');
  email = sessionStorage.getItem('email');
  valid = sessionStorage.getItem('valid');

  constructor(private router: Router) { }
  ngOnInit() {

    // null value if storage is undefined
    if(!this.valid){
      this.router.navigateByUrl('/login');
    }

  }

    // convert this.valid to Boolean
    userLoggedIn(){
      Boolean(this.valid);
      return this.valid
    }
    // Log out and clear any storage sessions and then navigate to /login page
    logOut(){
      sessionStorage.clear();
      this.router.navigateByUrl('/login');
    }

}
