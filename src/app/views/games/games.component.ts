import { Component } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { InformationComponent } from "../../components/information/information.component";

@Component({
  selector: 'app-games',
  imports: [CarruselComponent, InformationComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

}
