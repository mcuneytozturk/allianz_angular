import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  post?: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private commentService: CommentService) {
  }
  
  ngOnInit(): void {
    const params = this.route.snapshot.params;
    let postId = parseInt(params['id'])  
    this.postService.getPost(postId).subscribe(post => this.post = post)
    this.commentService.getCommentsByPost(postId).subscribe(comments => this.comments = comments)  
    console.log(this.comments);
  }
}
