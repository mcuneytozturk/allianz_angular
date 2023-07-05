import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/data/User';
import { UserService } from 'src/app/services/user.service';
import {
  faCheck,
  faTimes} from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/data/Post';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  users: User[] = [];
  user?: User;
  posts: Post[] = [];
  faTimes = faTimes;
  faCheck = faCheck


  constructor(private userService: UserService, private route: ActivatedRoute, private postService: PostService) {
  }
  
  ngOnInit(): void {
    const params = this.route.snapshot.params;
    let userId = parseInt(params['id']);
    this.userService.getUser(userId).subscribe(user => this.user = user);
    this.postService.getPostsByUser(userId).subscribe(posts => this.posts = posts)
  }
}
