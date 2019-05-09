import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './Services/AuthenticationService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  loggedIn: boolean = true;
  constructor(private router: Router,
    private authenticationService:AuthenticationService) {
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
}
