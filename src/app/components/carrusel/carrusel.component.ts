import { Component } from '@angular/core';
import { JuegosService } from '../../services/juesgos/jusgoscard.servise';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-carrusel',
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styles: `

section {
    display: flex;
    overflow: hidden;
    overflow-x: auto;
    gap: 5px;

    div {
      figure {
        margin: 0 5px;  
        img {
            cursor: pointer;
            border-radius: 20px;
            width: 200px;
            height: 250px;
            
            object-fit: cover;
          }
        }
      }

}
  `,
})
export class CarruselComponent {
  juegos: any[] = [];

  constructor(private juegosService: JuegosService) {}

  ngOnInit() {
    this.juegosService.getJuegos().subscribe((data) => {
      this.juegos = data;
    });
  }
}
