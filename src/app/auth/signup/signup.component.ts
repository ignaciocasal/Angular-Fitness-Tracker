import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import * as moment from 'moment';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  minDate: any;
  maxDate: any;
  isLoading = false
  private loadingSubscription: Subscription

  constructor(private authService: AuthService, private uiService: UiService) {
  }

  ngOnInit() {
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading
    })
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

  ngOnDestroy(): void{
    if (this.loadingSubscription){
      this.loadingSubscription.unsubscribe()
    }
  }

}
