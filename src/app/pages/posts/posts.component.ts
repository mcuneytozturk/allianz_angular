import { Component } from '@angular/core';
import { Post } from 'src/app/data/Post';
import {
  faUserPen,
  faTrash,
  faCheck,
  faTimes,
  faCircleInfo,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  title: string = 'Posts';
  posts: Post[] = [];
  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faCircleInfo = faCircleInfo;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  pageIndex: number = 0;
  pageSize: number = 10;

  searchText: string = '';
  filteredData: Post[] = [];

  constructor(private postService: PostService, private router: Router){}

  deletePost(postId: number | undefined): void {
    if (postId !== undefined) {
      this.postService.deletePost(postId);
    } else {
      throw new Error('Gönderiye ait bir postId değeri bulunmuyor.');
    }
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
    this.postService.getPosts().subscribe((posts) => (this.filteredData = posts));
  }
  filterData() {
    if (this.searchText === '') {
      this.postService.getPosts().subscribe((posts) => (this.filteredData = posts));
    } else {
      this.filteredData = this.posts.filter((post) => {
        return post.postId === +this.searchText;
      });
    }
  }
  onSearchTextChange(){
    this.router.navigate(['posts'], { queryParams: { postId: this.searchText } });
    this.filterData();
  }

  handlePrevBtn() {

  }
  handleNextBtn() {

  }
}
