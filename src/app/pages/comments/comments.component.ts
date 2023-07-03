import { Component } from '@angular/core';
import { Comment } from 'src/app/data/Comment';
import { comments } from 'src/app/data/comments';
import { faCircleInfo, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments: Comment[] = comments;
  title: string = "Comments";
  faCircleInfo = faCircleInfo;
  faTrash = faTrash;
  faCheck = faCheck;
  faTimes = faTimes;
}
