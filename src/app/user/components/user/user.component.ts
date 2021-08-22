import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUserModel} from "../../../models/iUserModel";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user:IUserModel;
  @Output()
  xxx:EventEmitter<IUserModel> = new EventEmitter<IUserModel>()
  constructor() { }

  ngOnInit(): void {
  }

  selectUser() {
    this.xxx.emit(this.user)
  }
}
