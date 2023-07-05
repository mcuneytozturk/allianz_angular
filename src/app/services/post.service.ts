import { Injectable } from '@angular/core';
import { Observable,of, Subject } from 'rxjs';
import { POSTS } from 'src/app/data/posts';
import { Post } from 'src/app/data/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = POSTS;
  private postsSubject: Subject<Post[]> = new Subject<Post[]>();

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  addPost(newPost: Post): void {
    this.posts.push(newPost);
    this.postsSubject.next(this.posts);
  }

  getPostsSubject(): Observable<Post[]> {
    return this.postsSubject.asObservable();
  }

  getPost(id: number): Observable<Post | undefined> {
    const post = this.posts.find((post: Post) => post.postId === id )
    return of(post)
  }

  deletePost(postId: number): void {
    const index = this.posts.findIndex(post => post.postId === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
