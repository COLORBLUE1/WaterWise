import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [],
  templateUrl: './carrusel.component.html',
  styles: `

    div {
      overflow-y: auto;
      figure {
        display: flex;
        gap: 15px;
  
          img {
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
