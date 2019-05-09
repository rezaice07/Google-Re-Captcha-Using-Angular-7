import { Injectable } from '@angular/core';
import { CurrentLoggedInInModel } from '../models/CurrentLoggedInInModel';

@Injectable()
export class AuthenticationService {
    currentLoggedInUser: CurrentLoggedInInModel = new CurrentLoggedInInModel();

    constructor(
    ) {

    }
    validateLoggedInUser() {
        var username = localStorage.getItem('username');
        var password = localStorage.getItem('password');
        var rememberMe = localStorage.getItem('rememberMe');

        var credentialValidated = (username && username != '') && (password && password != '') ? true : false;
        if (credentialValidated && rememberMe && rememberMe.toLowerCase() == 'true')
            return true;

        return false;
    }

    setLoggedInUserInfo(
        username: string,
        password: string,
        rememberMe: string) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('rememberMe', rememberMe);
    }

    removeLoggedInUserInfo() {
        localStorage.setItem('username', null);
        localStorage.setItem('password', null);
        localStorage.setItem('rememberMe', null);
    }
}