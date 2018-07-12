import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  signupForm: FormGroup;
  signupValidationError = {};
  signupErrorMessage: string;
  signinForm: FormGroup;
  signinValidationError = {};
  signinErrorMessage: string;
  @ViewChild('signupClose') signupClose: ElementRef;
  @ViewChild('signinClose') signinClose: ElementRef;
  isLoading = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
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
  }

  onSignup() {
    this.authService.signup(this.signupForm.value)
      .toPromise()
      .then((result) => {
        this.signupValidationError = {};
        this.signupErrorMessage = '';
        this.saveTokenAndRedirect(result, this.signupClose);
      })
      .catch((err) => {
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

      });
  }

  onSignin() {
    this.authService.signin(this.signinForm.value)
      .toPromise()
      .then((result) => {
        localStorage.setItem('token', result);
        this.signinValidationError = {};
        this.signinErrorMessage = '';
        this.saveTokenAndRedirect(result, this.signinClose);
      })
      .catch((err) => {
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

      });
  }

  private saveTokenAndRedirect(token, closeElement) {
    localStorage.setItem('token', token);
    closeElement.nativeElement.click();
    this.router.navigate(['/dashboard']);
  }

  private verifyUser() {
    if (!localStorage.token) {
      this.isLoading = false;
      return;
    }

    this.authService.verifyUser()
      .toPromise()
      .then((result) => {
        if (result) {
          this.router.navigate(['/dashboard']);
        }
        this.isLoading = false;
      });
  }

}
