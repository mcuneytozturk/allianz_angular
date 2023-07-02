import { Component } from '@angular/core';
import { posts } from 'src/app/posts';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  title: string = 'Gönderiler';
  posts: Post[] = posts;

  getColumnNames(): string[] {
    return Object.keys(this.posts[0]);
  }
}
