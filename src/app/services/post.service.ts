import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { POSTS } from 'src/app/data/posts';
import { Post } from 'src/app/data/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    const posts = of(POSTS);
    return posts;
  }
}
