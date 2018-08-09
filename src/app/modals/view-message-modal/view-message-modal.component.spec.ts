import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMessageModalComponent } from './view-message-modal.component';

describe('ViewMessageModalComponent', () => {
  let component: ViewMessageModalComponent;
  let fixture: ComponentFixture<ViewMessageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMessageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
