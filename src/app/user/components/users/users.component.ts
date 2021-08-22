import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {IUserModel} from "../../../models/iUserModel";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  selectedUser:IUserModel
  users:IUserModel[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  catchEE(obj:IUserModel) {
    this.selectedUser = obj
  }
}
