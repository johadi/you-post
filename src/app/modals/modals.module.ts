import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMessageModalComponent } from './view-message-modal/view-message-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ViewMessageModalComponent
  ],
  declarations: [ViewMessageModalComponent]
})
export class ModalsModule { }
