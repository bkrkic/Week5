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

  // Check if logged-in
  email = sessionStorage.getItem('email');
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (!this.email){
      this.router.navigate(['/login']);
    }
  }

}
