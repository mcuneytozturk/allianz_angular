import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ButtonComponent } from './button/button.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    CommentsComponent,
    UsersComponent,
    UserDetailComponent,
    CategoriesComponent,
    ButtonComponent,
    PostDetailComponent,
    MainPageComponent,
    CategoryDetailComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
