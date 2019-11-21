import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit,OnDestroy {

  @Output() closeSidebar = new EventEmitter()
  isAuth = false
  authSubscription: Subscription

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  onItemClicked() {
    this.closeSidebar.emit()
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }
}
