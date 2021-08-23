import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../postServise/post.service";
import {IPostModel} from "../../../models/iPostModel";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
    posts:IPostModel[]

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts=value)
  }
  ngOnDestroy(): void {
    console.log('destroy posts');
  }

}
