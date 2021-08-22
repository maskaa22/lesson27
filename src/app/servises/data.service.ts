import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSell:BehaviorSubject<any> = new BehaviorSubject<any>(0);

  constructor() { }
  setNewValue(value:any){
    if (true)
    this.dataSell.next(value)
  }
  getCurrentValue(){
    if (true)
    return this.dataSell;
  }
  getSnapshotValue(){
    if (true)
      return this.dataSell.getValue();
  }
}
