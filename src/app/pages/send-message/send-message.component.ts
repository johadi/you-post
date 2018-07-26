import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { map} from 'rxjs/operators';
import { CreateMessage, GroupActionTypes, ClearError, ResetCreateMessageState } from '../state/actions';
import { createMessageSelector, errorSelector } from '../state/selectors';
import { AppStateI, ErrorI } from '../state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  groupId: any;
  createMessageError$: Observable<string>;
  createMessageSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppStateI>,
  ) {
    this.initComponent();
  }

  initComponent() {
    this.createMessageSub = this.store.pipe(select(createMessageSelector))
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/group', this.groupId]);
          this.store.dispatch(new ResetCreateMessageState());
        }
      });

    this.createMessageError$ = this.store.pipe(
      select(errorSelector),
      map((err: ErrorI) => {
        if (err && err.type === GroupActionTypes.CREATE_MESSAGE) {
          return err.message;
        }
    }));
  }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      message: [''],
      priority: ['normal']
    });
    this.groupId = this.route.parent.snapshot.paramMap.get('id');
  }

  onDismissAlert() {
    this.store.dispatch(new ClearError());
  }

  onSumbit() {
    this.store.dispatch(new CreateMessage(
      { messageDetail: this.messageForm.value, groupId: this.groupId}
      )
    );
  }

  ngOnDestroy() {
    this.createMessageSub.unsubscribe();
  }

}
