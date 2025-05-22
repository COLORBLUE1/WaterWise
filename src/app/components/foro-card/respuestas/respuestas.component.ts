import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-respuestas',
  imports: [CommonModule, FormsModule],
  templateUrl: './respuestas.component.html',
  styles: ` .respuestascont {
  overflow: hidden;
  width: 100vw;
  height: 300px;
  position: fixed;
  bottom:0;
  padding: 0;
  left: 0;

span {
  position: fixed;
  width:100%;
  background: #7286D3;
  height: 50px;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;

  h2 {
  font-family:inter;
  margin:0;
  font-weight: normal;
  }
}
}
.respuestas {
  overflow-y: auto;
  position:absolute;
  width: 100%;
  height: 100%;
  top: 50px;
  background: #fff2f2;

  h2{
    color: white;
    text-align:left;
  }

  .cardRespuesta{
  width: 80%;
  background: #E5E0FF;
  margin: 10px auto;
  padding: 10px;
  border-radius:50px;
  display: flex;
  align-items: center;
  
  img {
    border-radius:100%;
    height: 50px;
    width:50px;
  }

  div {
  display: grid;
  justify-content: center;
  color:#000;
  height: auto;
  margin-left:15px;
  gap: 10px;

  small {
  font-family: inter;
  font-weight: bold;
  font-size: 1rem;
}

p {
  font-family: inter;
  color:rgba(0,0,0, 0.65);
  margin:0;
}
}
}
}`,
})
export class RespuestasComponent {
  usuarios: any[] = [];
  foros: any[] = [];
  foroSeleccionado: any = null;
  @Input() respuestas: any[] = [];
}
