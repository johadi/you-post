import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { userDetailsSelector } from '../state/selectors';
import { AppStateI } from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userDetails$: Observable<any>;
  constructor(private store: Store<AppStateI>) {
    this.userDetails$ = store.select(userDetailsSelector);
  }
}
