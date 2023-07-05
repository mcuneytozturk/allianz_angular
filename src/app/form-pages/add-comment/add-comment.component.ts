import { Component } from '@angular/core';
import { Comment } from 'src/app/data/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  comments: Comment[] = [];
  newComment: Comment = {
    commentId: 0,
    postId: 0,
    userId: 0,
    comment: '',
    creationDate: '',
    isConfirmed: true,
  };

  constructor(private commentService: CommentService) {
    this.commentService.getComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
      this.newComment.commentId = this.comments.length + 1;
    });
  }

  addNewComment(): void {
    this.newComment.creationDate = new Date().toISOString().slice(0, 10);
    this.commentService.addComment(this.newComment);
    this.newComment = {
      commentId: this.comments.length + 1,
      postId: 0,
      userId: 0,
      comment: '',
      creationDate: '',
      isConfirmed: true,
    };
  }
}
