import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import * as moment from 'moment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  minDate: any;
  maxDate: any;

  constructor() { }

  ngOnInit() {
    this.minDate = new Date()
    this.maxDate = new Date()
    this.minDate = moment().subtract(100, 'years')
    this.maxDate = moment().subtract(18, 'years')
  }

  onSubmit(form: NgForm){
    console.log(form.value.email)
    console.log(form.value.agree)
  }

}
