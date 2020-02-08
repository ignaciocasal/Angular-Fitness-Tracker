import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import * as fromApp from "../reducers/app.reducer";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.State>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(fromApp.getIsAuth)
  }

}
