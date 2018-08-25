import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetUsersBySearch, ResetGetUserBySearchState, GroupActionTypes } from '../state/actions';
import { searchUsersSelector, errorSelector } from '../state/selectors';
import { AppStateI } from '../state';
import { Observable, Subscription } from 'rxjs';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;
  searchingSub: Subscription;
  errorSub: Subscription;
  isSearching: boolean;
  groupId: any;
  searchResult$: Observable<object>;

  constructor(private route: ActivatedRoute, private store: Store<AppStateI>, public userService: UserService) {
    this.initComponent();
  }

  initComponent() {
    this.searchResult$ = this.store.select(searchUsersSelector);
    this.errorSub = this.store.select(errorSelector)
      .subscribe((err) => {
        if (err && err.type === GroupActionTypes.GET_USERS_BY_SEARCH) {
          this.resetSearchState();
        }
      });
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
    this.groupId = this.route.parent.snapshot.paramMap.get('id');
    this.onSearch();
  }

  onSearch() {
    this.searchingSub = this.searchForm.controls.search.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.isSearching = true;
        this.store.dispatch(new GetUsersBySearch({ searchTerm: value, groupId: this.groupId}));
      });
  }

  resetSearchState() {
    this.store.dispatch(new ResetGetUserBySearchState());
  }

  ngOnDestroy() {
    if (this.isSearching) {
      this.resetSearchState();
    }

    this.errorSub.unsubscribe();
    this.searchingSub.unsubscribe();
  }

}
