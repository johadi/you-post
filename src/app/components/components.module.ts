import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {ModalsModule} from '../modals/modals.module';

@NgModule({
  imports: [
    CommonModule,
    ModalsModule,
    RouterModule
  ],
  exports: [
    NavBarComponent, SideBarComponent
  ],
  declarations: [NavBarComponent, SideBarComponent]
})
export class ComponentsModule { }
