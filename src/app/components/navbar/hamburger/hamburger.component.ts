import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  imports: [],
  templateUrl: './hamburger.component.html',
  styles: `
  
  section {
    background:rgba(114, 133, 211, 0.66);
    backdrop-filter:blur(10px);
    height:100vh;
    width:70%; 
    z-index:20;
    position: fixed;
    top: 0;
    left:0;
    ul{
      margin-top: 100px;
      display: grid;
      gap: 20px;
      li{
        font-size:20px;
        list-style:none;
        font-family:inter;
      }
    }
  }`
})
export class HamburgerComponent {

}
