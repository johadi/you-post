import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { GetDashboardMessages, GroupActionTypes } from '../state/actions';
import { getDashboardMessagesSelector, errorSelector } from '../state/selectors';
import { AppStateI, ErrorI } from '../state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardMessages$: any;
  constructor(private store: Store<AppStateI>) {
    this.dashboardMessages$ = this.store.select(getDashboardMessagesSelector)
      .pipe(tap(r => console.log('RES', r)));
  }

  ngOnInit() {
    this.store.dispatch(new GetDashboardMessages());
  }

}
