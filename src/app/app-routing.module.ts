import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GroupBoardComponent } from './pages/group-board/group-board.component';
import { GroupUsersComponent } from './pages/group-users/group-users.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import { ViewMessageComponent } from './pages/view-message/view-message.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {CreateGroupComponent} from './pages/create-group/create-group.component';
import {GroupMessagesComponent} from './pages/group-messages/group-messages.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { UserResolverService } from './resolvers/user-resolver.service';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component:  IndexPageComponent },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: { userResolver: UserResolverService },
    children: [
      { path: '', component:  DashboardComponent },
      { path: 'create-group', component:  CreateGroupComponent },
      { path: 'groups', component:  GroupsComponent },
    ]
  },
  {
    path: 'group/:id',
    component:  GroupBoardComponent,
    canActivate: [AuthGuard],
    resolve: { userResolver: UserResolverService },
    children: [
      { path: '', component: GroupMessagesComponent  },
      { path: 'users', component:  GroupUsersComponent },
      { path: 'add-user', component:  AddUserComponent },
      { path: 'send-message', component:  SendMessageComponent },
      { path: 'view-message', component:  ViewMessageComponent }
    ]
  },
  { path: '**', component:  NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolverService]
})
export class AppRoutingModule { }
