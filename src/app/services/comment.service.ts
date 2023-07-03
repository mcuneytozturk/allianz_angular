import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from 'src/app/data/Comment';
import { COMMENTS } from 'src/app/data/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getComments(): Observable<Comment[]>{
    const comments = of(COMMENTS)
    return comments;
  }
}
