import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [MenuComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styles: `section{
    //background-color:rgb(55, 255, 88);
    height: 30vh;
    width: 100%;
    position: absolute;

  }`
})
export class HeaderComponent {

}
