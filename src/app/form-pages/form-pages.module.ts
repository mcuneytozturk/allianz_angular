import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddUserComponent,
    AddCategoryComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddUserComponent,
    AddCategoryComponent,
    AddPostComponent
  ]
})
export class FormPagesModule { }
