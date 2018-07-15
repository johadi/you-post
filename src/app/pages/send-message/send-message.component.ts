import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  messageForm: FormGroup;
  groupId: any;
  createMessageError: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private groupService: GroupService
    ) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      message: [''],
      priority: ['normal']
    });
    this.groupId = this.route.parent.snapshot.paramMap.get('id');
  }

  onDismissAlert() {
    this.createMessageError = '';
  }

  onSumbit() {
    this.groupService.createMessage(this.messageForm.value, this.groupId)
      .toPromise()
      .then(response => {
        if (response) {
          this.router.navigate(['/group', this.groupId]);
        }

        this.createMessageError = '';
      })
      .catch(({message}) => {
        this.createMessageError = message;
      });
  }

}
