import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../models/PostModel';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  template: `<h1>POSTS</h1>
  <app-post *ngFor="let post of posts" [post]="post"></app-post>
  `,
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {
  posts: PostModel[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
}
