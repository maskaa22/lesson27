import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../userServise/user.service";
import {IUserModel} from "../../../models/iUserModel";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy{

  users:IUserModel[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  ngOnDestroy(): void {
    console.log('destroy users');
  }


}
