import { Component } from '@angular/core';
import { Post } from 'src/app/data/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  posts: Post[] = [];
 newPost: Post = {
  postId: 0,
  userId: 0,
  categoryId: 0,
  title: '',
  content: '',
  creationDate: '',
  isPublished: true
 }

 constructor(private postService: PostService) {
  this.postService.getPosts().subscribe((posts: Post[]) => {
    this.posts = posts;
    this.newPost.postId = posts.length + 1;
  });
}

addNewPost(): void {
  this.newPost.creationDate = new Date().toISOString().slice(0, 10);
  this.postService.addPost(this.newPost);
  this.newPost = {
    postId: this.posts.length + 1,
    userId: 0,
    categoryId: 0,
    title: '',
    content: '',
    creationDate: '',
    isPublished: true
   }
}
}
