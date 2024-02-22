import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Users: any[] = [
    {
      id: 2,
      email: 'david@gmail.com',
      password: '123123David'
    },
    {
      id: 3,
      email: 'tom@gmail.com',
      password: '123123Tom'
    }
  ]

  session: any

  constructor() {
  }

  login(email: string, password: string) {
    let user = this.Users.find((u) => u.email === email && u.password === password);
    console.log('===>', user)
    if (user) {
      this.session = user
      localStorage.setItem('session', JSON.stringify(this.session))
    }
    return user
  }

  isLoggedIn(): boolean {
    return !!this.session;
  }
}
