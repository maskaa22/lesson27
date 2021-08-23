import { Component, OnInit } from '@angular/core';
import {PostService} from "../postServise/post.service";
import {IPostModel} from "../../../models/iPostModel";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post:IPostModel
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPostById(history.state.id).subscribe(value => this.post=value)
  }

}
