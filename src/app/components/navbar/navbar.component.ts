import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styles: `
  div {
    border-radius: 5px;
    height: 30px;
    width: 90%;
    margin:0 auto;
    margin-top: 40px;

    ul {
      padding: 0; 
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        list-style: none;
        padding: 0;   
        img{
        width: 30px;
        height: 30px;

        &:hover{
          cursor: pointer;
          transform: scale(1.2);
          transition: all 0.3s ease-in-out;
        }
        }
      }
    }
  }
  `,
})
export class NavbarComponent {
  
}
