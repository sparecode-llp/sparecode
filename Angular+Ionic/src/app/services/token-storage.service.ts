import { Injectable } from '@angular/core';

const TokenKey = 'AuthToken';
const UsernameKey = 'AuthUsername';
const AuthoritiesKey= 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: string = '';

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  saveToken(token: string) {
    window.sessionStorage.removeItem(TokenKey);
    window.sessionStorage.setItem(TokenKey, token);
  }

  getToken(): string {
    return sessionStorage.getItem(TokenKey);
  }

  saveUsername(username: string) {
    window.sessionStorage.removeItem(UsernameKey);
    window.sessionStorage.setItem(UsernameKey, username);
  }

  getUsername(): string {
    return sessionStorage.getItem(UsernameKey);
  }

  saveAuthorities(authorities: string) {
    window.sessionStorage.removeItem(AuthoritiesKey);
    window.sessionStorage.setItem(AuthoritiesKey, JSON.stringify(authorities));
  }

  getAuthorities(): string {
    this.roles = '';

    if (sessionStorage.getItem(TokenKey)) {
      JSON.parse(sessionStorage.getItem(AuthoritiesKey)).array.forEach(authority => {
        this.roles = authority.authority;
      });
    }

    return this.roles;
  }
}
