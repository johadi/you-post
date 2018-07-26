import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../services/group.service';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GetGroupMessages } from '../state/actions';
import { groupMessagesSelector } from '../state/selectors';
import { AppStateI } from '../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-group-messages',
  templateUrl: './group-messages.component.html',
  styleUrls: ['./group-messages.component.scss']
})
export class GroupMessagesComponent implements OnInit {

  groupMessages$: Observable<any>;
  constructor(
    private route: ActivatedRoute, private groupService: GroupService, private store: Store<AppStateI>
  ) {
    this.initComponent();
  }

  initComponent() {
    this.groupMessages$ = this.store.pipe(
      select(groupMessagesSelector),
      map((result: any) => {
        if (result) {
          return result.rows;
        }
      })
    );
  }

  ngOnInit() {
    this.getGroupMessages();
  }

  getGroupMessages() {
    const groupId = this.route.parent.snapshot.paramMap.get('id');
    this.store.dispatch(new GetGroupMessages(groupId));
  }

}
