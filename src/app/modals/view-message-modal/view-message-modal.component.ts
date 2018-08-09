import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-message-modal',
  templateUrl: './view-message-modal.component.html',
  styleUrls: ['./view-message-modal.component.scss']
})
export class ViewMessageModalComponent implements OnInit {
  @Input() isLoading: any;
  @Input() message: any;
  @Input() groupName: string;
  @Output() resetMessage: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('viewMessageModalContent') viewMessageModalContent: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  onCloseModal() {
    if (this.message) {
      this.resetMessage.emit(this.message.id);
    }
  }

  @HostListener('click') onClick() {

    if (!this.viewMessageModalContent.nativeElement.contains(event.target)) {
      this.onCloseModal();
    }
  }
}
