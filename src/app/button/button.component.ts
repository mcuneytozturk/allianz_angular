import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() icon: any;
  @Input() text: string;
  @Input() textColor: string;
  @Input() bgColor: string;
  @Output() btnClick = new EventEmitter<any>();


  constructor(){
    this.text = '';
    this.textColor = '';
    this.bgColor = '';
  }
   onClick(){
    this.btnClick.emit();
   }
}
