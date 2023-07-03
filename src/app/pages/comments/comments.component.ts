import { Component } from '@angular/core';
import { Comment } from 'src/app/data/Comment';
import { COMMENTS } from 'src/app/data/comments';
import { faCircleInfo, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments: Comment[] = COMMENTS;
  title: string = "Comments";
  faCircleInfo = faCircleInfo;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
  searchText: string = '';
  filteredData: Comment[] = COMMENTS;

  filterData() {
    if (this.searchText === '') {
      this.filteredData = this.comments;
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
