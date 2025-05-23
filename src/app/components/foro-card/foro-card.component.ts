import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoService } from '../../services/foros/foros.service';
import { FormsModule } from '@angular/forms';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { ModalResponderComponent } from './respuestas/modal-responder/modal-responder.component';
import { ModalCrearForoComponent } from './modal-crear-foro/modal-crear-foro.component';
import { ModalEditarModalComponent } from "./modal-editar-modal/modal-editar-modal.component";

@Component({
  standalone: true,
  selector: 'app-foro-card',
  imports: [
    CommonModule,
    FormsModule,
    RespuestasComponent,
    ModalResponderComponent,
    ModalCrearForoComponent,
    ModalEditarModalComponent
],
  templateUrl: './foro-card.component.html',
  styles: `section {
     height: auto;
     width: 100%;
     .new{
     cursor: pointer;
  display: grid;
  justify-content: center;
  justify-items: center;
  position: sticky;
  top: 0px;
  z-index: 99;
  background: #fff2f2;
  padding-bottom: 30px;
  strong{
    color:#000;
    font-family: inter;
  }
     }
     div{
      overflow: hidden;
      background: #E5E0FF;
      padding: 10px;
      border-radius: 35px;
      display: grid;
      justify-items: center;
      height: 200px;
      margin: 15px 0;
  

    .botones {
        font-family: inter;
        display: flex;
        gap:10px;
        button {
          width: 100px;
          margin: auto;
          background:rgb(85, 116, 255);
          padding: 10px;
          border-radius: 35px;
          border: none;
          color:rgb(255, 254, 254);
          cursor: pointer;
          &:hover {
            scale: 1.1;
           background:red;
          }
        }
}

          p {
        color: #000;
        font-family: inter;
        margin: 0;
      }
    }    
    
    .foroselecionado {
      min-height:200px;
      height:auto;
      margin: 0;

      .boton {
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
  usuarioLogueado = JSON.parse(localStorage.getItem('usuario') || '{}');
  constructor(private foroService: ForoService) {}

  //Crear nuevo foro
  showModalForo = false;

  abrirModalForo() {
    this.showModalForo = true;
  }
  cerrarModalForo() {
    this.showModalForo = false;
  }

  enviarForo(data: { titulo: string; contenido: string }) {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (!usuario.userId) {
      alert('Debes iniciar sesión para crear un foro');
      return;
    }
    this.foroService
      .agregarForo(usuario.userId, data.titulo, data.contenido)
      .subscribe({
        next: () => {
          this.foroService.getForos().subscribe((data) => (this.foros = data));
          this.cerrarModalForo();
        },
        error: (err) => alert('Error al crear foro'),
      });
  }

  ngOnInit() {
    this.foroService.getForos().subscribe((data) => {
      this.foros = data;
    });
  }
  showModal = false;
  respuestaPendiente = '';

  abrirModal() {
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
  }

  enviarRespuesta(contenido: string) {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (!usuario.userId) {
      alert('Debes iniciar sesión para responder');
      return;
    }
    this.foroService
      .agregarRespuesta(this.foroSeleccionado.foroId, usuario.userId, contenido)
      .subscribe({
        next: () => {
          // Recarga las respuestas del foro
          this.foroService
            .getRespuestas(this.foroSeleccionado.foroId)
            .subscribe((respuestas) => {
              this.respuestas = respuestas;
            });
        },
        error: (err) => {
          alert('Error al enviar respuesta');
        },
      });
    this.cerrarModal();
  }

  nuevaRespuesta: string = '';

  respuestas: any[] = [];

  seleccionarForo(foro: any) {
    this.foroSeleccionado = foro;
    this.foroService.getRespuestas(foro.foroId).subscribe((respuestas) => {
      this.respuestas = respuestas;
    });
  }

showConfirmEliminar = false;
foroAEliminar: any = null;

eliminarForo(foro: any) {
  this.foroAEliminar = foro;
  this.showConfirmEliminar = true;
}

confirmarEliminar() {
  const foro = this.foroAEliminar;
  this.foroService.eliminarForo(foro.foroId, this.usuarioLogueado.userId).subscribe({
    next: () => {
      this.foroService.getForos().subscribe(data => this.foros = data);
      if (this.foroSeleccionado && this.foroSeleccionado.foroId === foro.foroId) {
        this.foroSeleccionado = null;
        this.respuestas = [];
      }
      this.showConfirmEliminar = false;
      this.foroAEliminar = null;
    },
    error: err => {
      alert(err.error?.error || 'Error al eliminar foro');
      this.showConfirmEliminar = false;
      this.foroAEliminar = null;
    }
  });
}

showModalEditarForo = false;
foroAEditar: any = null;

abrirModalEditarForo(foro: any) {
  this.foroAEditar = foro;
  this.showModalEditarForo = true;
}

cerrarModalEditarForo() {
  this.showModalEditarForo = false;
  this.foroAEditar = null;
}

editarForo(data: { foroId: number, titulo: string, contenido: string, estado: string }) {
  this.foroService.editarForo(
    data.foroId,
    this.usuarioLogueado.userId,
    data.titulo,
    data.contenido,
    data.estado
  ).subscribe({
    next: () => {
      this.foroService.getForos().subscribe(data => this.foros = data);
      this.cerrarModalEditarForo();
    },
    error: err => alert(err.error?.error || 'Error al editar foro')
  });
}
}
