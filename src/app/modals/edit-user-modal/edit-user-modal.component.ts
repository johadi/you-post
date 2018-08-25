import {Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {AppStateI} from '../../pages/state';
import {authStateSelector, userErrorSelector} from '../../pages/state/selectors';
import {AuthActionTypes, ClearAuthError, ClearUserError, UpdateUser, UserActionTypes} from '../../pages/state/actions';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent implements OnInit, OnDestroy {
  editUserForm: FormGroup;
  userDetails: any;
  userSub: Subscription;
  updateUserErrorMessage: string;
  updateFieldsErrors: {};
  @ViewChild('userAvatar') userAvatar: ElementRef;

  constructor(private formBuilder: FormBuilder, private store: Store<AppStateI>, public userService: UserService) {
    this.store.select(authStateSelector)
      .subscribe(authState => {
        this.userDetails = authState.userDetails;
      });
    this.store.select(userErrorSelector)
      .subscribe((error) => {
        if (error && error.type === UserActionTypes.UPDATE_USER) {
          this.handleError(error);
        }
      });
  }

  ngOnInit() {
    const { username, fullname, mobile, email } = this.userDetails;
    this.editUserForm = this.formBuilder.group({
      username: [username],
      fullname: [fullname, Validators.required],
      email: [{ value: email, disabled: true }, Validators.required],
      mobile: [mobile],
      avatar: ['']
    });
  }

  onUpdate() {
    const preparedForm = this.prepareForm();
    this.store.dispatch(new UpdateUser(preparedForm));
  }

  prepareForm() {
    const formData = new FormData();
    const editUserFormControls = this.editUserForm.controls;

    Object.keys(editUserFormControls).forEach((key) => {
      formData.append(key, editUserFormControls[key].value);
    });

    return formData;
  }

  onAvatarChange(event) {
    const { type, files } = event.target;

    if (type === 'file' && files.length > 0) {
      this.userAvatar.nativeElement.src = window.URL.createObjectURL(files[0]);
      this.editUserForm.get('avatar').setValue(files[0]);
    }
  }

  handleError(error: any) {
    const { message, status } = error;

    if (typeof message === 'string') {
      this.updateUserErrorMessage = message;
    } else if (status === 400 || status === 409) {
      this.updateFieldsErrors = message;
    } else {
      this.updateUserErrorMessage = 'Something went wrong. Try again.';
    }
  }

  onDismissAlert() {
    const { username, fullname, mobile, email, avatarPath } = this.userDetails;
    this.updateUserErrorMessage = '';
    this.updateFieldsErrors = {};
    this.store.dispatch(new ClearUserError());
    this.userAvatar.nativeElement.src = avatarPath ? avatarPath : this.userService.getDefaultAvatarPath;
    this.editUserForm.reset({username, fullname, email, mobile, avatar: ''});
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

}
