import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

//import { Userobj } from '../userobj';

//const BACKEND_URL = 'http://localhost:3000';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit{

  username = sessionStorage.getItem('username') || "";
  birthdate = sessionStorage.getItem('birthdate');
  age = Number(sessionStorage.getItem('age'));
  email = sessionStorage.getItem('email');
  password = sessionStorage.getItem('password');
  valid = Boolean(sessionStorage.getItem('valid'))

  constructor(private router: Router, private httpClient: HttpClient){}

  // If valid does not have a session value, route to /login page
  ngOnInit(){
    if(!this.valid){
      this.router.navigateByUrl('/login');
    }
  }

  // this.httpClient.post(BACKEND_URL + '/edit', this.user, httpOptions).subscribe((data:any) => {
  //   if (update.ok) {

  saveDetails() {
    //without username || ''; and no null!
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('birthdate', this.birthdate!);
    sessionStorage.setItem('age', this.age.toString()!);
    sessionStorage.setItem('email', this.email!);
    sessionStorage.setItem('password', this.password!);
    this.router.navigateByUrl('/account');
  }

}

