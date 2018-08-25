import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetDashboardMessages, GetMessage, ResetViewingMessageState, UpdateDashboardMessages } from '../state/actions';
import { getGroupStateSelector } from '../state/selectors';
import { AppStateI } from '../state';
import { Subscription } from 'rxjs';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  dashboardMessages: any;
  isLoading: boolean;
  currentMessage: any;
  groupName: string;
  groupSub: Subscription;

  constructor(public userService: UserService, private store: Store<AppStateI>) {
   this.groupSub = this.store.select(getGroupStateSelector)
      .subscribe(({ dashboardMessages, currentViewingMessage, isLoading }) => {
        this.dashboardMessages = dashboardMessages;
        this.isLoading = isLoading;
        this.currentMessage = currentViewingMessage;
      });
  }

  ngOnInit() {
    this.getDashboardMessages();
  }

  getDashboardMessages(pageNumber = 1) {
    this.store.dispatch(new GetDashboardMessages(pageNumber));
  }

  handleClick(groupId, messageId, groupName) {
    const payload = { groupId, messageId };
    this.groupName = groupName;
    this.store.dispatch(new GetMessage(payload));
  }

  resetCurrentMessageState(messageId) {
    this.store.dispatch(new UpdateDashboardMessages(messageId));
    this.store.dispatch(new ResetViewingMessageState());
  }

  onScrollDown() {
    const { currentPage, totalPages } = this.dashboardMessages.metaData;
    if (currentPage < totalPages) {
      this.getDashboardMessages(currentPage + 1);
    }
  }

  onScrollUp() {
    this.getDashboardMessages();
  }

  ngOnDestroy() {
    this.groupSub.unsubscribe();
  }
}
