import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Store } from '@ngrx/store';
import { GetUserGroups } from '../state/actions';
import { getUserGroupsSelector } from '../state/selectors';
import { AppStateI } from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups$: Observable<any>;

  constructor(private groupService: GroupService, private store: Store<AppStateI>) {
    this.initComponent();
  }

  initComponent() {
    this.groups$ = this.store.select(getUserGroupsSelector);
  }

  ngOnInit() {
    this.store.dispatch(new GetUserGroups());
  }

}
