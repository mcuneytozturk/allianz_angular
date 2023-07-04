import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() pageTitle: string = '';
  @Input() greeting?: string;
  @Input() parag1?: string;
  @Input() parag2?: string;
  @Input() parag3?: string;
}
