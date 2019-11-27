import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToogle = new EventEmitter()
  isAuth = false
  authSubscription: Subscription

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  onToogle() {
    this.sidenavToogle.emit()
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(): void {
    if (this.authSubscription){
      this.authSubscription.unsubscribe()
    }
  }
}
