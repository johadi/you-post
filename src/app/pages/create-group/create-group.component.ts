import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map} from 'rxjs/operators';
import { CreateGroup, GroupActionTypes, ClearError, ResetCreateGroupState } from '../state/actions';
import { createGroupSelector, errorSelector } from '../state/selectors';
import { AppStateI, ErrorI } from '../state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  createGroupForm: FormGroup;
  createGroupError$: Observable<string>;
  createGroupSub: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppStateI>
  ) {
    this.initComponent();
  }

  initComponent() {
    this.createGroupSub = this.store.select(createGroupSelector)
      .subscribe((response: any) => {
        if (response) {
          this.router.navigate(['/group', response.id]);
          this.store.dispatch(new ResetCreateGroupState());
        }
      });

    this.createGroupError$ = this.store.select(errorSelector)
      .pipe(
        map((error: ErrorI) => {
          if (error && error.type === GroupActionTypes.CREATE_GROUP) {
            const {message} = error;
            return typeof message === 'string' ? message : 'Error occurred. Try again!';
          }
        }));
  }

  ngOnInit() {
    this.createGroupForm = this.formBuilder.group({
      name: ['']
    });
  }

  handleSubmit() {
    this.store.dispatch(new CreateGroup(this.createGroupForm.value));
  }

  onAlertDismiss() {
    this.store.dispatch(new ClearError());
  }
}
