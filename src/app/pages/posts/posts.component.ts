import { Component } from '@angular/core';
import { POSTS } from 'src/app/data/posts';
import { Post } from 'src/app/data/Post';
import {
  faUserPen,
  faTrash,
  faCheck,
  faTimes,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  title: string = 'Posts';
  posts: Post[] = POSTS;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faCircleInfo = faCircleInfo;

  searchText: string = '';
  filteredData: Post[] = POSTS;

  filterData() {
    if (this.searchText === '') {
      this.filteredData = this.posts;
    } else {
      this.filteredData = this.posts.filter((post) => {
        return post.postId === +this.searchText;
      });
    }
  }
  onSearchTextChange(){
    this.filterData();
  }
}
