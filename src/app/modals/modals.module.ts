import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMessageModalComponent } from './view-message-modal/view-message-modal.component';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewMessageModalComponent,
    EditUserModalComponent
  ],
  declarations: [ViewMessageModalComponent, EditUserModalComponent]
})
export class ModalsModule { }
