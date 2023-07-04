import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './pages/posts/posts.component';
import { UsersComponent } from './pages/users/users.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserDetailComponent } from './detail-pages/user-detail/user-detail.component';
import { PostDetailComponent } from './detail-pages/post-detail/post-detail.component';
import { CommentDetailComponent } from './detail-pages/comment-detail/comment-detail.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailComponent },
  {path: 'comments', component: CommentsComponent},
  {path: 'comments/:id', component: CommentDetailComponent },
  {path: 'categories', component: CategoriesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
