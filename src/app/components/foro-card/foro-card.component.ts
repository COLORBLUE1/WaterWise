import { Component } from '@angular/core';
import { ForoService } from '../../services/ForoService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foro-card',
  imports: [CommonModule],
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
 foros: any[] = [];

  // constructor(private foroService: ForoService) {}

  // ngOnInit() {
  //   this.foroService.getForos().subscribe(data => {
  //     this.foros = data;
  //   });
  //}
}
