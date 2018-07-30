import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { GroupBoardComponent } from './group-board/group-board.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupUsersComponent } from './group-users/group-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupMessagesComponent } from './group-messages/group-messages.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PageRoutingModule } from './page-routing.module';
import { IndexPageComponent } from './index-page/index-page.component';
import { SetAddUserButtonDirective } from '../directives/set-add-user-button.directive';
import { StoreModule } from '@ngrx/store';
import { groupFeatureReducers } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect, GroupEffect } from './state/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('group', groupFeatureReducers),
    EffectsModule.forFeature([GroupEffect, AuthEffect]),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    PageRoutingModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    SendMessageComponent,
    GroupBoardComponent,
    ViewMessageComponent,
    GroupsComponent,
    GroupUsersComponent,
    NotFoundComponent,
    CreateGroupComponent,
    GroupMessagesComponent,
    AddUserComponent,
    IndexPageComponent,
    SetAddUserButtonDirective,
  ]
})
export class PagesModule { }
