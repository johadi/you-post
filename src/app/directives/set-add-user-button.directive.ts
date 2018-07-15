import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { GroupService } from '../services/group.service';

@Directive({
  selector: '[appSetAddUserButton]'
})
export class SetAddUserButtonDirective implements OnInit {

  @Input() currentGroupUsersIds: any[];
  @Input() searchedUser;
  @Input() groupId;
  constructor(private elementRef: ElementRef, private groupService: GroupService) { }

  ngOnInit() {
    this.setSearchButton();
  }

  setSearchButton() {
    const { elementRef: { nativeElement }, currentGroupUsersIds, searchedUser } = this;

    if (currentGroupUsersIds.includes(searchedUser.id)) {
      nativeElement.classList.remove('btn-primary');
      nativeElement.classList.add('btn-success');
      nativeElement.innerText = 'Member';
      nativeElement.disabled = true;
      return;
    }

    nativeElement.onclick = () => {
      this.addUserToGroup();
    };
  }

  addUserToGroup() {
    const { elementRef: { nativeElement }, searchedUser, groupId } = this;

    this.groupService.addUserToGroup({user: searchedUser.username}, groupId)
      .toPromise()
      .then(response => {
        if (response) {
          console.log('Added Successfully');
          nativeElement.classList.remove('btn-primary');
          nativeElement.classList.add('btn-success');
          nativeElement.innerText = 'Member';
          nativeElement.disabled = true;
        }
      })
      .catch(err => console.log(err));
  }

}
