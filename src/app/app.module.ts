import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { DetailPagesModule } from './detail-pages/detail-pages.module';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentModule } from './components/component.module';

import { AppComponent } from './app.component';
import { UserAddComponent } from './additionForms-page/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FontAwesomeModule,
    DetailPagesModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
