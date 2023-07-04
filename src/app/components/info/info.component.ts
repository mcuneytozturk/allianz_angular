import { Component, Input } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
 faCircleInfo = faCircleInfo;
 @Input() parag: string = '';
 @Input() color: string = '';
 @Input() textColor?: string;
}
