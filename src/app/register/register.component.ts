import { Component, OnInit } from '@angular/core';
import {RegisterationService} from '../_services/registeration.service';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration: any = {};

  constructor(private registrationService: RegisterationService, private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  register()
  {
    this.registrationService.register(
      this.registration.email,
      this.registration.firstname,
      this.registration.lastname,
      this.registration.password).subscribe(
        response => {
          console.log(response)
          this.login();
        },
      error => {
          console.log(error)
      }
    );
  }

  login()
  {
    this.auth.login(this.registration.email, this.registration.password)
      .subscribe(
        data => {
          localStorage.setItem('loggedIn', '1');
          this.router.navigate(['myaccount']);
        },
        error => {
          this.router.navigate(['login']);
        });
  }

}
