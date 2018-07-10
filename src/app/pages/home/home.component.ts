import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  display = 'none';
  show: boolean;
  signupForm: FormGroup;
  signupValidationError = {};
  signupErrorMessage: string;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      fullname: [''],
      email: [''],
      mobile: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  onSignup() {
    console.log('FORM', this.signupForm.get('username'));
    this.authService.signup(this.signupForm.value)
      .toPromise()
      .then((result) => {
        localStorage.setItem('token', result);
        this.signupValidationError = {};
        this.signupErrorMessage = '';
      })
      .catch((err) => {
        const { message } = err;

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
  // Placed in a the .ts file
  openModal() {
    this.display = 'block';
    this.show = true;
  }
  onCloseHandled() {
    this.display = 'none';
  }
}
