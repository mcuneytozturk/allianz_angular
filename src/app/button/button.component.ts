import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() textColor: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();
  
  constructor(){
    this.text= '';
    this.textColor = '';
    this.color = '';
  }
   onClick(){
    this.btnClick.emit();
   }
}
