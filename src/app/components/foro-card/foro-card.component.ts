import { Component } from '@angular/core';

@Component({
  selector: 'app-foro-card',
  imports: [],
  templateUrl: './foro-card.component.html',
  styles: `section {
     height: auto;
     width: 100%;
     div{
      overflow: hidden;
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
    }`
})
export class ForoCardComponent {

}
