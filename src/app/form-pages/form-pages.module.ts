import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../components/component.module';
import { AddCommentComponent } from './add-comment/add-comment.component';



@NgModule({
  declarations: [
    AddUserComponent,
    AddCategoryComponent,
    AddPostComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentModule
  ],
  exports: [
    AddUserComponent,
    AddCategoryComponent,
    AddPostComponent,
    AddCommentComponent
  ]
})
export class FormPagesModule { }
