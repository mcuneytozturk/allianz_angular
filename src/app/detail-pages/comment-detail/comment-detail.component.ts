import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/data/Comment';
import { Post } from 'src/app/data/Post';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent {
  comments: Comment[] = [];
  comment?: Comment;

  constructor(private commentService: CommentService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    let commentId = parseInt(params['id']);
    this.commentService.getComment(commentId).subscribe(comment => this.comment = comment);
  }

}
