import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/throttleTime';
import { GroupService } from '../../services/group.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;
  sub: any;
  groupId: any;
  searchResult: object;
  constructor(private groupService: GroupService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
    this.groupId = this.route.parent.snapshot.paramMap.get('id');
    this.onSearch();
  }

  onSearch() {
    this.sub = this.searchForm.controls.search.valueChanges
      .throttleTime(3000)
      .distinctUntilChanged()
      .subscribe(value => {
        this.groupService.getUsersBySearch(value, this.groupId)
          .toPromise()
          .then(response => {
            this.searchResult = response;
            console.log('SSSS', this.searchResult);
          })
          .catch(error => console.log('ERRR', error));
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
