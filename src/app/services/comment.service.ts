import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Comment } from 'src/app/data/Comment';
import { COMMENTS } from 'src/app/data/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = COMMENTS

  constructor() { }

  getComments(): Observable<Comment[]>{
    return of(this.comments)
  }

  deleteComment(commentId: number){
    const index = this.comments.findIndex(comment => comment.commentId === commentId)
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
}
