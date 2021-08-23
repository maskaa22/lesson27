import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IUserModel} from "../../../models/iUserModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  @Input()
  user:IUserModel;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  details() {
    this.router.navigate(['users/', this.user.id], {state: this.user})
  }

}
