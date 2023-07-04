import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    ModalComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    ModalComponent,
    InfoComponent
  ]
})
export class ComponentModule { }
