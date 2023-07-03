import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailComponent,
    PostDetailComponent,
    CategoryDetailComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
