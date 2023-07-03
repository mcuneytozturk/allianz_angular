import { Component } from '@angular/core';
import { posts } from 'src/app/posts';
import { Post } from 'src/app/Post';
import { faUserPen, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  title: string = 'Posts';
  posts: Post[] = posts;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;

  getColumnNames(): string[] {
    return Object.keys(this.posts[0]);
  }
}
