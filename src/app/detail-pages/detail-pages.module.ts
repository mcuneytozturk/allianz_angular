import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';

import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [
    UserDetailComponent,
    PostDetailComponent,
    CommentDetailComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    UserDetailComponent,
    PostDetailComponent,
    CommentDetailComponent,
    CategoryDetailComponent,
  ]
})
export class DetailPagesModule { }
