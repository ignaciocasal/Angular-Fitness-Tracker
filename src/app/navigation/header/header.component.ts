import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromApp from "../../reducers/app.reducer";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToogle = new EventEmitter()
  isAuth$: Observable<boolean>

  constructor(private authService: AuthService, private store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromApp.getIsAuth)
  }

  onToggle() {
    this.sidenavToogle.emit()
  }

  onLogout() {
    this.authService.logout()
  }

}
