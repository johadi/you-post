import { Directive, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddUserToGroup, ResetAddUserToGroupState } from '../pages/state/actions';
import { addUserToGroupSelector } from '../pages/state/selectors';
import { AppStateI } from '../pages/state';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSetAddUserButton]'
})
export class SetAddUserButtonDirective implements OnInit, OnDestroy {

  addUserSub: Subscription;
  @Input() currentGroupUsersIds: any[];
  @Input() searchedUser;
  @Input() groupId;

  constructor(
    private elementRef: ElementRef, private store: Store<AppStateI>
  ) {}

  ngOnInit() {
    this.setSearchButton();
  }

  setSearchButton() {
    const { elementRef: { nativeElement }, currentGroupUsersIds, searchedUser, store } = this;

    if (currentGroupUsersIds.includes(searchedUser.id)) {
      this.setDisabledButton();
      return;
    }

    nativeElement.onclick = () => {
      this.addUserToGroup();
    };

    this.addUserSub = store.select(addUserToGroupSelector)
      .subscribe(response => {
        if (response && response.addedUser === searchedUser.username) {
          this.setDisabledButton();
          store.dispatch(new ResetAddUserToGroupState());
        }
      });
  }

  addUserToGroup() {
    const { searchedUser, groupId, store } = this;
    const userDetails = { user: searchedUser.username };
    store.dispatch(new AddUserToGroup({ userDetails, groupId }));
  }

  setDisabledButton() {
    const { elementRef: { nativeElement } } = this;

    nativeElement.classList.remove('btn-primary');
    nativeElement.classList.add('btn-success');
    nativeElement.innerText = 'Member';
    nativeElement.disabled = true;
  }

  ngOnDestroy() {
    if (this.addUserSub) {
      this.addUserSub.unsubscribe();
    }
  }

}
