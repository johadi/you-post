import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { GroupService } from './services/group.service';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [UserService, AuthService, GroupService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
