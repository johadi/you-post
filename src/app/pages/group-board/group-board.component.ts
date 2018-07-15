import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-board',
  templateUrl: './group-board.component.html',
  styleUrls: ['./group-board.component.scss']
})
export class GroupBoardComponent implements OnInit {

  userDetails: any;
  groupId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('id');
    this.route.data
      .subscribe(data => this.userDetails = data.userResolver);
  }

}
