import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//for google recaptcha
import { RecaptchaModule } from 'ng-recaptcha';
// if you need forms support:
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './Services/AuthenticationService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaModule,//.forRoot(),
    RecaptchaFormsModule, // if you need forms support  
    RouterModule.forRoot([
    {
      path: '',
      component: AppComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
  ])
],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
