import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  registerForm = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  ngOnInit(): void {
  }

  Register() {
    console.log(this.registerForm.getRawValue())
  }

  Cancel() {
    this.router.navigateByUrl('/')
  }


}
