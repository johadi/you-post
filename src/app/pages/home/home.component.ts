import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  signupForm: FormGroup;
  signupValidationError = {};
  signupErrorMessage: string;
  signinForm: FormGroup;
  signinValidationError = {};
  signinErrorMessage: string;
  @ViewChild('signupClose') signupClose: ElementRef;
  @ViewChild('signinClose') signinClose: ElementRef;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
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

    this.authService.verifyUser();
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
    this.authService.verifyUser()
      .toPromise()
      .then((result) => {
        console.log('RES', result);
      });
  }
}
