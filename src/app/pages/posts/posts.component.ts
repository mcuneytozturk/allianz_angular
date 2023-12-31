import { Component } from '@angular/core';
import { Post } from 'src/app/data/Post';
import {
  faUserPen,
  faTrash,
  faCheck,
  faTimes,
  faMagnifyingGlass,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  faMagnifyingGlass = faMagnifyingGlass;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  searchText: string = '';
  filteredData: Post[] = [];

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
    if(queryParams['i'] !== undefined){
      this.pageIndex = parseInt(queryParams['i'])
    }
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
    this.postService
      .getPosts()
      .subscribe((posts) => (this.filteredData = posts));
  }

  deletePost(postId: number | undefined): void {
    if (postId !== undefined) {
      this.postService.deletePost(postId);
    } else {
      throw new Error('Gönderiye ait bir postId değeri bulunmuyor.');
    }
  }

  filterData() {
    if (this.searchText === '') {
      this.postService
        .getPosts()
        .subscribe((posts) => (this.filteredData = posts));
    } else {
      this.filteredData = this.posts.filter((post) => {
        return post.postId === +this.searchText;
      });
    }
  }
  onSearchTextChange() {
    this.router.navigate(['posts'], {
      queryParams: { postId: this.searchText },
    });
    this.filterData();
  }

  pageIndex: number = 0;
  pageSize: number = 10;
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = false;

  handlePrevBtn() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.isNextDisabled = false;
      this.pageIndex === 0
        ? this.router.navigate(['posts'])
        : this.router.navigate(['posts'], {
            queryParams: { i: this.pageIndex },
          });
    } else {
      this.isPrevDisabled = true;
      alert('Last Page!!');
    }
  }

  handleNextBtn() {
    const remainingPages = this.posts.length % this.pageSize;
    let totalPage: number = Math.floor(this.posts.length / this.pageSize);

    if (remainingPages > 0) {
      totalPage++;
    }
    if (this.pageIndex + 1 < totalPage) {
      this.pageIndex++;
      this.router.navigate(['posts'], {
        queryParams: { i: this.pageIndex },
      });
      this.isPrevDisabled = false;
    } else {
      alert('Last Page!!');
      this.isNextDisabled = true;
    }
  }
}
