import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

import { Userobj } from '../userobj';

const BACKEND_URL = 'http://localhost:3000';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit{



  // New profile object
  user = {
    usernameNew: sessionStorage.getItem('username'),
    birthdateNew: sessionStorage.getItem('birthdate'),
    ageNew: sessionStorage.getItem('age'),
    emailNew: sessionStorage.getItem('email'),
    passwordNew: sessionStorage.getItem('password'),
    valid: false
  }

  // Profile data
  valid = sessionStorage.getItem('valid');

  constructor(private router: Router, private httpClient: HttpClient){}

  // If valid does not have a session value, route to /login page
  ngOnInit(){
    if(!this.valid){
      this.router.navigateByUrl('/login');
    }
  }

  updateDetails() {
    this.httpClient.post(BACKEND_URL + '/edit', this.user, httpOptions).subscribe((data:any) => {
      if (data.ok) {
        sessionStorage.setItem('username', this.user.usernameNew!);
        sessionStorage.setItem('birthdate', this.user.birthdateNew!);
        sessionStorage.setItem('age', this.user.ageNew!);
        sessionStorage.setItem('email', this.user.emailNew!);
        sessionStorage.setItem('password', this.user.passwordNew!);
        this.router.navigateByUrl('/account');

      } else {
        alert("Failed to change user details.");
      }
    });
  }

}
