import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  usersPageBtn(){
    console.log("usersPageBtn works");
  }
  categoryPageBtn(){
    console.log("categoryPageBtn works");
  }
  mainPageBtn(){
    console.log("mainPageBtn works");
  }
  something(){
    console.log("button works");
  }
}
