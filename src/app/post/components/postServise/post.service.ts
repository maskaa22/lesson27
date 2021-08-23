import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPostModel} from "../../../models/iPostModel";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getPosts():Observable<IPostModel[]>{
    return this.httpClient.get<IPostModel[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getPostById(id:number):Observable<IPostModel>{
    return this.httpClient.get<IPostModel>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
