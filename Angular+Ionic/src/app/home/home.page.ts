import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Login } from '../models/login';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  form: any= {};
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage = '';
  roles: string = '';
  loginInfo = {} as Login;

  constructor(private router: Router,
              private authService: AuthService,
              private tokenService: TokenStorageService) {  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin() {
    console.log(this.form);

    this.loginInfo = (
      this.loginInfo.email = this.form.email,
      this.loginInfo.password = this.form.password
    )
      

    this.authService.login(this.loginInfo).subscribe(data => {
      this.tokenService.saveToken(data.accessToken);
      this.tokenService.saveUsername(data.username);
      this.tokenService.saveAuthorities(data.authorities);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenService.getAuthorities();
      this.reloadPage()
    }, error => {
      console.log(error);
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;
    }
    );
  }

  onSignup() {
    this.router.navigateByUrl("/signup");
  }

  reloadPage() {
    window.location.reload();
  }

}
