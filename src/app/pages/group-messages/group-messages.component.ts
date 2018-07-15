import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-messages',
  templateUrl: './group-messages.component.html',
  styleUrls: ['./group-messages.component.scss']
})
export class GroupMessagesComponent implements OnInit {

  groupMessages: any[];
  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit() {
    this.getGroupMessages();
  }

  getGroupMessages() {
    const groupId = this.route.parent.snapshot.paramMap.get('id');
    this.groupService.getGroupMessages(groupId)
      .toPromise()
      .then(response => {
        console.log('+++++++++', response.rows);
        this.groupMessages = response.rows;
      })
      .catch(err => console.log(err));
  }

}
