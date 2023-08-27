
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

import { Userpwd } from "../userpwd";
import { Userobj } from '../userobj';

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) { }

  valid = sessionStorage.getItem('valid');
  ngOnInit(){
    if(this.valid == 'true'){
      this.router.navigateByUrl('/account');
    }
  }

  email = '';
  password = '';
  userpwd: Userpwd = {email: this.email, password: this.password};
  userobj: Userobj = {username: "", birthdate: "", age: 0, email: this.userpwd.email, valid: false};

  signInEvent(){

    this.userpwd.email = this.email;
    this.userpwd.password = this.password;

    this.httpClient.post(BACKEND_URL + '/api/auth', this.userpwd, httpOptions)
    .subscribe((data:any)=>{
      // Check if form data posted
      alert(JSON.stringify(this.userpwd));
      // Check data of user in the array
      alert(JSON.stringify(data));
      //console.log(data)
      if(data.ok){

        // Set the members of the object file to have the requested values
        const userData = data.userData;
        this.userobj.username = userData.username;
        this.userobj.birthdate = userData.birthdate;
        this.userobj.age = userData.age;
        this.userobj.email = userData.email;
        this.userobj.valid = true;

        // Set the session storage properties to hold the recently stored values of the members in the object file
        sessionStorage.setItem('username', this.userobj.username);
        sessionStorage.setItem('birthdate', this.userobj.birthdate);
        // Convert int to string using the function toString()
        sessionStorage.setItem('age', this.userobj.age.toString());
        sessionStorage.setItem('email', this.userobj.email);
        sessionStorage.setItem('valid', this.userobj.valid.toString());
        this.router.navigateByUrl('/account');
      }
      else{
        alert("Sorry, wrong username or password.");
      };
    })
  }

}
