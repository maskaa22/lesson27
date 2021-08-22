import { Component } from '@angular/core';
import {DataService} from "./servises/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson27';

  constructor(private dataService:DataService) {
    this.dataService.getCurrentValue().subscribe(value => this.title=value)
  }

  incrementDataSell() {
    let value = this.dataService.getSnapshotValue();
    this.dataService.setNewValue(++value)
  }
}
