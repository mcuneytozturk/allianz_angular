import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { ComponentModule } from '../components/component.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    CommentsComponent,
    MainPageComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ComponentModule
  ],
  exports: [
    CategoriesComponent,
    CommentsComponent,
    MainPageComponent,
    PostsComponent,
    UsersComponent
  ]
})
export class PagesModule { }
