import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoService } from '../../services/foros/foros.servise';
import { FormsModule } from '@angular/forms';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { ModalResponderComponent } from './respuestas/modal-responder/modal-responder.component';

@Component({
  standalone: true,
  selector: 'app-foro-card',
  imports: [
    CommonModule,
    FormsModule,
    RespuestasComponent,
    ModalResponderComponent,
  ],
  templateUrl: './foro-card.component.html',
  styles: `section {
     height: auto;
     width: 100%;
     
     div{
      overflow: hidden;
      background: #E5E0FF;
      padding: 10px;
      border-radius: 35px;
      display: grid;
      justify-items: center;
      height: 200px;
      margin: 15px 0;
      position: sticky;
      top: 20px;
          p {
        color: #000;
        font-family: inter;
        margin: 0;
      }
    }    
    
    .foroselecionado {
      min-height:200px;
      height:auto;

      button {
        background:transparent;
        border: none;
        font-family: inter;
        cursor: pointer;
        color: rgb(0,0,0, 0.50);

          &:active{
        color: red;
      }
      }
    }
  }
`,
})

export class ForoCardComponent {
  foros: any[] = [];
  foroSeleccionado: any = null;

  constructor(private foroService: ForoService) {}

  ngOnInit() {
    this.foroService.getForos().subscribe((data) => {
      this.foros = data;
    });
  }

  showModal = false;

  abrirModal() {
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
  }

  enviarRespuesta(respuesta: string) {
    // Aquí llamas a tu servicio para guardar la respuesta
    this.responderConModal(respuesta);
  }

  responderConModal(respuesta: string) {
    if (this.foroSeleccionado) {
      this.foroService
        .agregarRespuesta(this.foroSeleccionado.foroId, respuesta)
        .subscribe(() => {
          this.foroService
            .getRespuestas(this.foroSeleccionado.foroId)
            .subscribe((respuestas) => {
              this.respuestas = respuestas;
            });
        });
    }
  }
  nuevaRespuesta: string = '';

  respuestas: any[] = [];

  seleccionarForo(foro: any) {
    this.foroSeleccionado = foro;
    this.foroService.getRespuestas(foro.foroId).subscribe((respuestas) => {
      this.respuestas = respuestas;
    });
  }

  responder() {
    if (this.nuevaRespuesta.trim()) {
      this.foroService
        .agregarRespuesta(this.foroSeleccionado.id, this.nuevaRespuesta)
        .subscribe(() => {
          // Recarga las respuestas después de agregar
          this.foroService
            .getRespuestas(this.foroSeleccionado.id)
            .subscribe((respuestas) => {
              this.foroSeleccionado.respuestas = respuestas;
              this.nuevaRespuesta = '';
            });
        });
    }
  }
}
