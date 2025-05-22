import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [MenuComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styles: `section {
  height: 30vh;
  position: absolute;
  min-width: 320px;
  max-width: 576px;
  width: 100%;
  position: absolute;
  
   @media only screen and (min-width: 320px) and (max-width: 576px) {
  width: 100dvw;
  background-color: transparent;
  }
  }`
})
export class HeaderComponent {

}