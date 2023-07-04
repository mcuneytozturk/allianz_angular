import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    ModalComponent
  ]
})
export class ComponentModule { }
