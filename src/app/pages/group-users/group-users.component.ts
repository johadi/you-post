import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetGroupUsers } from '../state/actions';
import { groupUsersSelector } from '../state/selectors';
import { AppStateI } from '../state';
import { Observable } from 'rxjs';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.component.html',
  styleUrls: ['./group-users.component.scss']
})
export class GroupUsersComponent implements OnInit {

  groups$: Observable<any>;
  constructor(private route: ActivatedRoute, private store: Store<AppStateI>, public userService: UserService) {
   this.initComponent();
  }

  initComponent() {
    this.groups$ = this.store.select(groupUsersSelector);
  }

  ngOnInit() {
    this.getGroupUsers();
  }

  getGroupUsers() {
    const groupId = this.route.parent.snapshot.paramMap.get('id');
    this.store.dispatch(new GetGroupUsers(groupId));
  }

}
