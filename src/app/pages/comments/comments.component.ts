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

  handlePrevBtn() {}
  handleNextBtn() {}
}
