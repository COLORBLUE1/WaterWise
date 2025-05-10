import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [],
  templateUrl: './carrusel.component.html',
  styles: `

    div {
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      figure {
        display: flex;
        gap: 15px;
  
          img {
            cursor: pointer;
            border-radius: 20px;
            width: 200px;
            height: 250px;
            object-fit: cover;
          }
        }
      }
  `
})
export class CarruselComponent {

}
