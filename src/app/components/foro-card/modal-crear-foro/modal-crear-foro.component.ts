import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-modal-crear-foro',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-backdrop" (click)="cerrar()"></div>
    <div class="modal-content">
      <input [(ngModel)]="titulo" placeholder="Título" />
      <textarea [(ngModel)]="contenido" placeholder="Contenido"></textarea>
      <div class="botones">
        <button (click)="crearForo()">Crear</button>
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
export class ModalCrearForoComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ titulo: string; contenido: string }>();
  titulo = '';
  contenido = '';

  cerrar() {
    this.close.emit();
  }
  crearForo() {
    if (this.titulo.trim() && this.contenido.trim()) {
      this.submit.emit({ titulo: this.titulo, contenido: this.contenido });
      this.titulo = '';
      this.contenido = '';
      this.cerrar();
    }
  }
}
