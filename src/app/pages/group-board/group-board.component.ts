import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { userDetailsSelector } from '../state/selectors';
import { AppStateI } from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-group-board',
  templateUrl: './group-board.component.html',
  styleUrls: ['./group-board.component.scss']
})
export class GroupBoardComponent implements OnInit {

  userDetails$: Observable<any>;
  groupId: any;
  constructor(private route: ActivatedRoute, private store: Store<AppStateI>) {
    this.userDetails$ = store.select(userDetailsSelector);
  }

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('id');
  }

}
