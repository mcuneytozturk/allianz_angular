import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/data/Post';
import { Comment } from 'src/app/data/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  posts: Post[] = [];
  comments: Comment[] = [];
  id: number = 0;
  post?: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private commentService: CommentService) {
    const queryParams = this.route.snapshot.queryParams;
    console.log(queryParams);
    if(queryParams['id'] !== undefined){
      this.id = parseInt(queryParams['id'])
      this.post = this.posts[this.id - 1]
    }
  }
}
