import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/AuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reCaptchKey: string = "";
  Username: string='';
  Password: string='';
  RememberMe: any;

  constructor(private router: Router,
    private authenticationService:AuthenticationService) {
    //console.log('Ctor');
  }

  ngOnInit() {
    //console.log('ngOnInit');
    this.reCaptchKey = "Your_Google_Recaptch_Key";
    this.redirectToLandingPage();
  }

  redirectToLandingPage(): void {
    
    var loggedIn=this.authenticationService.validateLoggedInUser();
    if (!loggedIn) {
      this.router.navigate([`./login`]);
    }
    else {
      this.router.navigate([`./home`]);
    }
  }

  login() {
        console.log(`Username:${this.Username} Password:${this.Password}`);
        this.authenticationService.setLoggedInUserInfo(this.Username,this.Password,this.RememberMe);

        this.router.navigate([`./home`]);
  }

}
