import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Comment } from 'src/app/data/Comment';
import { COMMENTS } from 'src/app/data/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = COMMENTS
  private commentSubject: Subject<Comment[]> = new Subject<Comment[]>()

  constructor() { }

  getComments(): Observable<Comment[]>{
    return of(this.comments)
  }

  addComment(newComment: Comment) {
    this.comments.push(newComment);
    this.commentSubject.next(this.comments);
  }

  deleteComment(commentId: number){
    const index = this.comments.findIndex(comment => comment.commentId === commentId)
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
  
  getCommentsByPost(id: number): Observable<Comment[]>{
    const comments = this.comments.filter(comment => comment.postId === id)
    return of(comments)
  }
}
