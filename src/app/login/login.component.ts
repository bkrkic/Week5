/* Task 4. Create a login function as part of angular that takes the form input and checks the 
values against hard coded (3 users) values. If the inputs don't match an error messages 
should be shown. If the inputs match than the page should get redirected to the account 
page using the router.navigate() method. */

//Lecture 4.3. Angular Routing - import from '@angular/router'
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  //Lecture 4.3. Angular Routing
  constructor(private router: Router){};
  
  //Task 4. Login Credentials
  email: string = "";
  password: string = "";
  user_ls = [
    {username: 'admin', password: 'password'},
    {username: 'student', password: '123'},
    {username: 'bego', password: 'krkic'}
  ]
  error: boolean = true;
  signInEvent(){
  // Event Handler Method - Verifying Login Credentials (From Lecture Slides 4.4)
    let user = {username: this.email, password: this.password};
    // If the identity of a user matches a user in the list
    for (let identity of this.user_ls){
      if (JSON.stringify(user) === JSON.stringify(identity)){
        // Move to account page
        this.router.navigateByUrl('/account');
        // Set error to false
        this.error = false;
        console.log(this.error)
      }
    }
    // Display an error message if true
    if (this.error == true){
      alert("Invalid user credentials!");
    }
  // End of SignIn Method
  }
}

  // Method 2. Event Handler Method - Verifying Login Credentials (From Lecture Slides 4.4) - signInEvent(username, password)
  // signInEvent = (email: string, password: string) => {
  //   let credentials = this.accounts.find(account => account.username == email && account.password == password)
  //     if (credentials){
  //       this.router.navigate(['account'])
  //     } else {
  //       alert("Invalid user credentials!")
  //     }
  // }
