import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMessagesComponent } from './group-messages.component';

describe('GroupMessagesComponent', () => {
  let component: GroupMessagesComponent;
  let fixture: ComponentFixture<GroupMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
