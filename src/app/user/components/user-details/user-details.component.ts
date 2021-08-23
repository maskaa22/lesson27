import { Component, OnInit } from '@angular/core';
import {IUserModel} from "../../../models/iUserModel";
import {UserService} from "../userServise/user.service";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user:IUserModel
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserById(history.state.id).subscribe(value => this.user=value)
  }

}
