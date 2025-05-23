import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-modal-editar-modal',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-backdrop" (click)="cerrar()"></div>
    <div class="modal-content" (click)="$event.stopPropagation()">
      <input [(ngModel)]="titulo" placeholder="Título" />
      <textarea [(ngModel)]="contenido" placeholder="Contenido"></textarea>
      <div class="botones">
        <button (click)="editarForo()">Guardar</button>
        <button (click)="cerrar()">Cancelar</button>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-backdrop {
        animation: bounce;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.27);
        backdrop-filter: blur(5px);
        z-index: 1000;
      }
      .modal-content {
        font-family: inter;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 2rem;
        border-radius: 20px;
        z-index: 1001;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      input {
        width: 100%;
        min-height: 20px;
        border-radius: 10px;
        border: none;
        padding: 0.5rem;
        resize: vertical;
        background: rgba(5, 103, 250, 0.27);
        color: #000;
        border: none;
      }

      textarea {
        width: 100%;
        min-height: 80px;
        border-radius: 10px;
        border: none;
        padding: 0.5rem;
        resize: vertical;
        background: rgba(5, 103, 250, 0.27);
        color: #000;
        border: none;
      }

      .botones {
        display: flex;
        button {
          width: 100px;
          margin: auto;
          background: #e5e0ff;
          padding: 10px;
          border-radius: 35px;
          border: none;
          color: #00000096;
          cursor: pointer;
          &:hover {
            scale: 1.5;
          }
        }
      }
    `,
  ],
})
export class ModalEditarModalComponent implements OnInit {
  @Input() foro: any;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ foroId: number; titulo: string; contenido: string; estado: string }>();

  titulo = '';
  contenido = '';
  estado = '';

  ngOnInit() {
    if (this.foro) {
      this.titulo = this.foro.titulo;
      this.contenido = this.foro.contenido;
      this.estado = this.foro.estado || 'activo';
    }
  }

  cerrar() {
    this.close.emit();
  }

  editarForo() {
    if (this.titulo.trim() && this.contenido.trim()) {
      this.submit.emit({
        foroId: this.foro.foroId,
        titulo: this.titulo,
        contenido: this.contenido,
        estado: this.estado
      });
      this.cerrar();
    }
  }
}