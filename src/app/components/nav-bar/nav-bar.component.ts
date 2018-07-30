import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logout } from '../../pages/state/actions';
import { AppStateI } from '../../pages/state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() userDetails: any;
  constructor(private router: Router, private store: Store<AppStateI>) { }

  ngOnInit() {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.store.dispatch(new Logout());
    this.router.navigate(['/']);
  }

}
