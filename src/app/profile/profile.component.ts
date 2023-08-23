import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  // Profile data
  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('birthdate');
  age = sessionStorage.getItem('age');

  // Check if logged-in
  email = sessionStorage.getItem('email');
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (!this.email){
      this.router.navigate(['/login']);
    }
  }


  // updateDetails() {}
  // }


}
