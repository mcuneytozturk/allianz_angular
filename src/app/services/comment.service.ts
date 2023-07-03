import { Injectable } from '@angular/core';
import { Comment } from 'src/app/data/Comment';
import { COMMENTS } from 'src/app/data/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getComments(): Comment[]{
    return COMMENTS;
  }
}
