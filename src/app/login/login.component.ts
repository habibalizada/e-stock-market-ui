import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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


  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username);
    // if (this.username==='username' && this.password==="dummy") {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['get-all-companies'])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
