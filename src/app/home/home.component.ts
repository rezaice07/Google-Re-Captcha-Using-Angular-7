import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/AuthenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Angular Google Captcha';
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.removeLoggedInUserInfo();
    this.router.navigate([`./login`]);
  }

}
