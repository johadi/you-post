import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  GetGroupMessages,
  GetMessage,
  ResetViewingMessageState,
  UpdateGroupBoardMessages,
  UpdateViewingMessageState
} from '../state/actions';
import { getGroupStateSelector, userDetailsSelector } from '../state/selectors';
import { AppStateI } from '../state';
import { Subscription } from 'rxjs';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-group-messages',
  templateUrl: './group-messages.component.html',
  styleUrls: ['./group-messages.component.scss']
})
export class GroupMessagesComponent implements OnInit, OnDestroy {

  groupMessages: any;
  groupName: string;
  currentViewingMessage: any;
  isLoading: boolean;
  userDetails: any;
  groupSub: Subscription;
  userSub: Subscription;
  defaultReadStatus = 'unread';
  groupId: any;

  constructor(
    private route: ActivatedRoute, private store: Store<AppStateI>, public userService: UserService
  ) {
    this.initComponent();
  }

  initComponent() {
    this.groupSub = this.store.pipe(select(getGroupStateSelector))
      .subscribe(({groupMessages, currentViewingMessage, isLoading}) => {
        this.groupMessages = groupMessages;
        this.currentViewingMessage = currentViewingMessage;
        this.isLoading = isLoading;
      });
    this.userSub = this.store.select(userDetailsSelector)
      .subscribe(userDetails => this.userDetails = userDetails);
  }

  ngOnInit() {
    this.groupId = this.route.parent.snapshot.paramMap.get('id');
    this.getGroupMessages();
  }

  getGroupMessages(pageNumber = 1) {
    this.store.dispatch(new GetGroupMessages({groupId: this.groupId, pageNumber}));
  }

  handleClick(message: any) {
    const {id, Group, readersId} = message;
    const readerIdIndex = readersId.findIndex(readerId => readerId === this.userDetails.id);

    if (readerIdIndex === -1) {
      const payload = {groupId: Group.id, messageId: id};
      this.groupName = Group.name;
      this.store.dispatch(new GetMessage(payload));
      return;
    }

    this.store.dispatch(new UpdateViewingMessageState(message));
  }

  resetCurrentMessageState(messageId) {
    this.store.dispatch(new ResetViewingMessageState());
    this.store.dispatch(new UpdateGroupBoardMessages({messageId, userId: this.userDetails.id}));
  }

  onScrollDown() {
    const {currentPage, totalPages} = this.groupMessages.metaData;
    if (currentPage < totalPages) {
      this.getGroupMessages(currentPage + 1);
    }
  }

  onScrollUp() {
    this.getGroupMessages();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.groupSub.unsubscribe();
  }

}
