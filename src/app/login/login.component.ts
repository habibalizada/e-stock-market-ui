import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username'
  password = ''
  errorMessage = 'Invalid Credential'
  invalidLogin = false


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username);
    if (this.username==='username' && this.password==="dummy") {
      //Redirect to Welcome Page
      this.router.navigate(['welcome'])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
