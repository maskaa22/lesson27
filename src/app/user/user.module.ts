import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [
    UsersComponent,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
