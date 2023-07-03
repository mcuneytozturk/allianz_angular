import { Component } from '@angular/core';
import { Comment } from 'src/app/data/Comment';
import { faCircleInfo, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments: Comment[] = [];
  title: string = "Comments";
  faCircleInfo = faCircleInfo;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  searchText: string = '';
  filteredData: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments = this.commentService.getComments();
    this.filteredData = this.commentService.getComments();
  }
  filterData() {
    if (this.searchText === '') {
      this.filteredData = this.commentService.getComments();
    } else {
      this.filteredData = this.comments.filter((comment) => {
        return comment.commentId === +this.searchText;
      });
    }
  }

  onSearchTextChange() {
    this.filterData();
  }
}
