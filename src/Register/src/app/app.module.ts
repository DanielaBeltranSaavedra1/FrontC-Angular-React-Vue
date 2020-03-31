import { BrowserModule } from '@angular/platform-browser';

import { NgModule,Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './user/users.component';
import { RouterModule, Routes } from '@angular/router';
import {UserService} from './shared/user.service';
import {HttpClientModule} from '@angular/common/http';
import { UserSingComponent } from './user-sing/user-sing.component';
const routes: Routes = [
  { path: '',   redirectTo: '/sing-in', pathMatch: 'full' },
  {
    path: 'sing-up',
    component: UsersComponent
  },
  {
    path: 'sing-in',
    component: UserSingComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserSingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers:[UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
