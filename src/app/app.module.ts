import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { GroupService } from './services/group.service';
import { httpInterceptorProviders } from './interceptors';
import { AuthGuard } from './guards/auth.guard';
import { environment } from '../environments/environment';
import { ModalsModule } from './modals/modals.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'YouPost Redux Dev Tool'
    }),
    HttpClientModule,
    PagesModule,
    AppRoutingModule,
    ModalsModule
  ],
  providers: [UserService, AuthService, GroupService, httpInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
