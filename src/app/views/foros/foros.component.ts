import { Component } from '@angular/core';
import { ForoCardComponent } from "../../components/foro-card/foro-card.component";

@Component({
  selector: 'app-foros',
  imports: [ForoCardComponent],
  templateUrl: './foros.component.html',
  styles: `section {
    height: 55dvh;
    width: 100%;
    display:grid;
    gap:20px;
    overflow: hidden;
    overflow-y: auto;

     div{
      background-color:rgb(59, 20, 255); 
      padding: 10px;
      border-radius: 35px;
      display: grid;
      justify-items: center;
      height: 200px;
      
          p {
        color: white;
        font-family: inter;
      }
    }
    }`,
})
export class ForosComponent {}
