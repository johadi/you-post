import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  form: FormGroup;
  createGroupError: string;

  constructor(
    private fb: FormBuilder,
    private groupService: GroupService,
    private router: Router
  ) {
    this.form = fb.group({
      name: ['']
    });
  }
  ngOnInit() {
  }
  handleSubmit() {
    this.groupService.createGroup(this.form.value)
      .toPromise()
      .then((response: any) => {
        this.router.navigate(['/group', response.id]);
      })
      .catch(error => {
        const { message } = error;
        this.createGroupError = typeof message === 'string' ? message : 'Error occurred. Try again!';
      });
  }
  onAlertDismiss() {
    this.createGroupError = '';
  }
}
