import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActionTypes, SignUp, SignIn, ClearAuthError, VerifyUser } from '../state/actions';
import { authStateSelector, authErrorSelector } from '../state/selectors';
import { AppStateI, ErrorI } from '../state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit, OnDestroy {

  signupForm: FormGroup;
  signupValidationError = {};
  signupErrorMessage: string;
  signinForm: FormGroup;
  signinValidationError = {};
  signinErrorMessage: string;
  hasError: boolean;
  errorSub: Subscription;
  authSub: Subscription;
  @ViewChild('signupClose') signupClose: ElementRef;
  @ViewChild('signupCloseBottom') signupCloseBottom: ElementRef;
  @ViewChild('signinClose') signinClose: ElementRef;
  @ViewChild('signinCloseBottom') signinCloseBottom: ElementRef;
  isLoading = true;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppStateI>) {
    this.initComponent();
  }

  initComponent() {
    this.errorSub = this.store.select(authErrorSelector)
      .subscribe((error: ErrorI) => {
        if (error) {
          this.hasError = true;

          if (error.type === AuthActionTypes.SIGN_UP) {
            this.handleSignUpError(error);
          }

          if (error.type === AuthActionTypes.SIGN_IN) {
            this.handleSignInError(error);
          }

          if (error.type === AuthActionTypes.VERIFY_USER) {

            if (localStorage.getItem('token')) {
              localStorage.removeItem('token');
            }

            this.isLoading = false;
          }
        }

      });

    this.authSub = this.store.select(authStateSelector)
      .subscribe((authState) => {
        this.authenticateUser(authState);
      });
  }

  ngOnInit() {
    this.verifyUser();

    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      fullname: [''],
      email: [''],
      mobile: [''],
      password: [''],
      confirmPassword: ['']
    });

    this.signinForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });

    this.signinClose.nativeElement.onclick = this.resetForms;
    this.signupClose.nativeElement.onclick = this.resetForms;
    this.signupCloseBottom.nativeElement.onclick = this.resetForms;
    this.signinCloseBottom.nativeElement.onclick = this.resetForms;
  }

  onSignup() {
    this.store.dispatch(new SignUp(this.signupForm.value));
  }

  onSignin() {
    this.store.dispatch(new SignIn(this.signinForm.value));
  }

  onDismissAlert() {
    this.signinErrorMessage = '';
    this.signupErrorMessage = '';
    this.store.dispatch(new ClearAuthError());
  }

  authenticateUser(authState) {
    const { signinSuccess, signupSuccess, isAuthenticating, userDetails } = authState;

    if (userDetails && localStorage.getItem('token')) {
      const {getPreviousURL} = this.authService;
      const url = getPreviousURL ? getPreviousURL : '/dashboard';

      this.router.navigate([url]);
      return;
    }

    if ((signinSuccess || signupSuccess) && !isAuthenticating) {
      this.signinClose.nativeElement.click();
      this.signupClose.nativeElement.click();
      this.verifyUser();
    }
  }

  private verifyUser() {
    if (!localStorage.token) {
      this.isLoading = false;
      return;
    }

    this.store.dispatch(new VerifyUser());
  }

  handleSignInError(err) {
    const {message} = err;
    if (typeof message === 'string') {
      this.signinValidationError = {};
      this.signinErrorMessage = message;
    } else if (typeof message === 'object' && message.validateError) {
      this.signinErrorMessage = '';
      this.signinValidationError = message.validateError;
    } else {
      this.signinValidationError = {};
      this.signinErrorMessage = 'Something went wrong. Try again.';
    }
  }

  handleSignUpError(err) {
    const {message} = err;

    if (typeof message === 'string') {
      this.signupValidationError = {};
      this.signupErrorMessage = message;
    } else if (typeof message === 'object' && message.validateError) {
      this.signupErrorMessage = '';
      this.signupValidationError = message.validateError;
    } else {
      this.signupValidationError = {};
      this.signupErrorMessage = 'Something went wrong. Try again.';
    }
  }

  resetForms = () => {
    this.signupForm.reset();
    this.signinForm.reset();

    if (this.hasError) {
      this.signinValidationError = {};
      this.signupValidationError = {};
      this.signinErrorMessage = '';
      this.signupErrorMessage = '';
      this.store.dispatch(new ClearAuthError());
    }
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
    this.authSub.unsubscribe();
  }

}
