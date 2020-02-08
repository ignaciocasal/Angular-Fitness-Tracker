import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UiService} from "../../services/ui.service";
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromApp from "../../reducers/app.reducer"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading$: Observable<boolean>
  private loadingSubscription: Subscription

  constructor(private authService: AuthService, private uiService: UiService, private store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromApp.getIsLoading)
    /*this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading
    })*/
  }

  onSubmit(form: NgForm) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    })
  }

  /*ngOnDestroy(): void{
    if (this.loadingSubscription){
      this.loadingSubscription.unsubscribe()
    }
  }*/

}
