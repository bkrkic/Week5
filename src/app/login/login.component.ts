
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) { }
  ngOnInit() {}

  email: string = '';
  password: string = '';

  signInEvent(){
    let user = {email: this.email, password: this.password};

    this.httpClient.post(BACKEND_URL + '/api/auth', user, httpOptions)
    .subscribe((data:any)=>{
      // Check form data posted
      alert(JSON.stringify(user));
      // Check data of user in the array
      alert(JSON.stringify(data));
      if(data.valid){
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('birthdate', data.birthdate);
        // Convert int to string
        sessionStorage.setItem('age', data.age.toString());
        sessionStorage.setItem('email', data.email)
        this.router.navigateByUrl('/profile');
      }
      else{
        alert("Sorry, wrong username or password.");
      };
    })
  }

}
