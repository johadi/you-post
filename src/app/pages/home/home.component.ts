import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  display = 'none';
  show: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getApi()
      .subscribe((response) => console.log('-------->', response));
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
