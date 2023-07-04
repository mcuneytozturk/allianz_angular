import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { UsersComponent } from './pages/users/users.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
