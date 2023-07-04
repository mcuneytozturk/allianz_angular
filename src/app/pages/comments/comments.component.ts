import { Component } from '@angular/core';
import { Comment } from 'src/app/data/Comment';
import {
  faCircleInfo,
  faTrash,
  faCheck,
  faTimes,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  comments: Comment[] = [];
  title: string = 'Comments';
  faCircleInfo = faCircleInfo;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  searchText: string = '';
  filteredData: Comment[] = [];

  constructor(private commentService: CommentService, private router: Router) {}

  deleteComment(commentId: number | undefined) {
    if (commentId !== undefined) {
      this.commentService.deleteComment(commentId);
    } else {
      throw new Error('Yoruma ait bir commentId değeri bulunmuyor.');
    }
  }

  ngOnInit(): void {
    this.commentService
      .getComments()
      .subscribe((comments) => (this.comments = comments));
    this.commentService
      .getComments()
      .subscribe((comments) => (this.filteredData = comments));
  }
  filterData() {
    if (this.searchText === '') {
      this.commentService
        .getComments()
        .subscribe((comments) => (this.filteredData = comments));
    } else {
      this.filteredData = this.comments.filter((comment) => {
        return comment.commentId === +this.searchText;
      });
    }
  }

  onSearchTextChange() {
    this.router.navigate(['/comments'], {
      queryParams: { commentId: this.searchText },
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
        ? this.router.navigate(['comments'])
        : this.router.navigate(['comments'], {
            queryParams: { commentIndex: this.pageIndex },
          });
    } else {
      this.isPrevDisabled = true;
      alert('Last Page!!')
    }
  }

  handleNextBtn() {
    const remainingPages = this.comments.length % this.pageSize;
    let totalPage: number = Math.floor(this.comments.length / this.pageSize);

    if(remainingPages > 0) {
      totalPage++
    } 
      console.log('pageIndex: ' + this.pageIndex);
     console.log('totalPage: ' + totalPage);
    if (this.pageIndex + 1 < totalPage) {
      this.pageIndex++;
      this.isPrevDisabled = false;
      this.router.navigate(['comments'], {
        queryParams: { commentIndex: this.pageIndex },
      });
    } else {
      alert('Last Page!!')
      this.isNextDisabled = true;
    }
  }
}
