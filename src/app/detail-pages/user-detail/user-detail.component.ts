import { Component, Input } from '@angular/core';
import { User } from 'src/app/data/User';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  @Input() user !: User;
  faTimes = faTimes;

}
