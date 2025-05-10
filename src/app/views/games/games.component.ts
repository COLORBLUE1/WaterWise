import { Component } from '@angular/core';
import { InformationComponent } from "../../components/information/information.component";
import { CarruselComponent } from "../../components/carrusel/carrusel.component";

@Component({
  selector: 'app-games',
  imports: [InformationComponent, CarruselComponent],
  templateUrl: './games.component.html',
  styles: `section {
 height: auto;
  width: 100%;
  padding: 20px;
}`
})
export class GamesComponent {

}
