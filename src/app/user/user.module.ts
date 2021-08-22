import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import {UserService} from "./user.service";


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
