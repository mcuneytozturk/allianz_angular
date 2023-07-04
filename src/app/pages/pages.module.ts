import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentModule } from '../components/component.module';
import { FormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CommentsComponent,
    MainPageComponent,
    PostsComponent,
    UsersComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ComponentModule,
    FormsModule
  ],
  exports: [
    CategoriesComponent,
    CommentsComponent,
    MainPageComponent,
    PostsComponent,
    UsersComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
