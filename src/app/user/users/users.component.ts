import { Component, OnInit } from '@angular/core';
import {DataService} from "../../servises/data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  curentDataShellValue:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getCurrentValue().subscribe(value => this.curentDataShellValue=value)
  }

  decrementDataShell() {
    let value = this.dataService.getSnapshotValue();
    this.dataService.setNewValue(--value)
  }
}
