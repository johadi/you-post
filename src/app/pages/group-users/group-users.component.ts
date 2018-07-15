import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.component.html',
  styleUrls: ['./group-users.component.scss']
})
export class GroupUsersComponent implements OnInit {

  groups: any;
  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit() {
    this.getGroupUsers();
  }

  getGroupUsers() {
    const groupId = this.route.parent.snapshot.paramMap.get('id');
    this.groupService.getGroupUsers(groupId)
      .toPromise()
      .then(response => this.groups = response)
      .catch(error => console.log('err', error));
  }

}
