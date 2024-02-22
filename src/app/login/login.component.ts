import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../share/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    // console.log(this.loginForm.value, this.loginForm.invalid,
    //   '==>', this.loginForm.getRawValue()
    // )
    let user = this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
    )
    if (!user) {
      alert('inavlid post and password')
    } else {
      this.router.navigateByUrl('/main')
    }
  }

  Register() {
    this.router.navigateByUrl('/register')
  }

  // protected readonly RouterLink = RouterLink;
}
