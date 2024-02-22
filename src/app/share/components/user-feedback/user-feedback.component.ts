import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss']
})
export class UserFeedbackComponent implements OnInit {
  feedback = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    questions: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    console.log(this.feedback, '<===')
  }

  onSubmit() {
    console.log(this.feedback.getRawValue())
  }
}
