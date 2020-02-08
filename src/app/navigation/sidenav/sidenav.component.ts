import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Store} from "@ngrx/store";
import * as fromApp from "../../reducers/app.reducer";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() closeSidebar = new EventEmitter()
  isAuth$: Observable<boolean>

  constructor(private authService: AuthService, private store: Store<fromApp.State>) {
  }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromApp.getIsAuth)
  }

  onItemClicked() {
    this.closeSidebar.emit()
  }

  onLogout(){
    this.authService.logout()
  }

}
