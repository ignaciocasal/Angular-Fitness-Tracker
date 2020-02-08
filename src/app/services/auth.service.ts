import {Injectable} from '@angular/core';
import {AuthData} from "../models/auth-data.model";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {TrainingService} from "./training.service";
import {UiService} from "./ui.service";
import {Store} from "@ngrx/store";
import * as fromApp from "../reducers/app.reducer"
import * as UI from "../reducers/ui.actions"
import * as Auth from "../reducers/auth.actions"

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private trainingService: TrainingService,
              private uiService: UiService,
              private store: Store<fromApp.State>) {
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated())
        this.router.navigate(['/training'])
      } else {
        this.trainingService.cancelSubscriptions()
        this.store.dispatch(new Auth.SetUnauthenticated())
        this.router.navigate(['/login'])
      }
    })
  }

  registerUser(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading())
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        this.store.dispatch(new UI.StopLoading())
      })
      .catch(error => {
        this.store.dispatch(new UI.StopLoading())
        this.uiService.showSnackbar(error.message, null, 5000)
      })
  }

  login(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading())
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        this.store.dispatch(new UI.StopLoading())
      })
      .catch(error => {
        this.store.dispatch(new UI.StopLoading())
        this.uiService.showSnackbar(error.message, null, 5000)
      })
  }

  logout() {
    this.afAuth.auth.signOut()
  }

}
