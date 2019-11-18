import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() closeSidebar = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onItemClicked() {
    this.closeSidebar.emit()
  }
}
