import { Injectable } from '@angular/core';
import { POSTS } from 'src/app/data/posts';
import { Post } from 'src/app/data/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Post[] {
    return POSTS;
  }
}
