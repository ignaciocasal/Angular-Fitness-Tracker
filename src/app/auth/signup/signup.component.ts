import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import * as moment from 'moment';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  minDate: any;
  maxDate: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.minDate = new Date()
    this.maxDate = new Date()
    this.minDate = moment().subtract(100, 'years')
    this.maxDate = moment().subtract(18, 'years')
  }

  onSubmit(form: NgForm) {

    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }

}
