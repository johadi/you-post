import { Component, OnInit, Input } from '@angular/core';

interface UserDetailsI {
  username: string;
  fullname: string;
  email: string;
  mobile?: string;
  avatarPath?: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() userDetails: UserDetailsI;

  constructor() { }

  ngOnInit() {
  }

}
