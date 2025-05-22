import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-modal-responder',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-backdrop" (click)="cerrar()"></div>
    <div class="modal-content">
      <textarea
        [(ngModel)]="respuesta"
        placeholder="Escribe tu respuesta"
      ></textarea>
      <div class="botones">
        <button (click)="enviar()">Enviar</button>
        <button (click)="cerrar()">Cancelar</button>
      </div>
    </div>
  `,
  styles: [`
      .modal-backdrop {
        animation: bounce;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.27);
        backdrop-filter: blur(5px);
        z-index: 1000;
      }
      .modal-content {
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
      
      textarea {
        width: 100%;
        min-height: 80px;
        border-radius: 10px;
        border: none;
        padding: 0.5rem;
        resize: vertical;
        background: rgba(5, 103, 250, 0.27);
        color: #000;
        border:none;
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
          font-family: inter;
          cursor: pointer;
          &:hover {
            scale: 1.5;
          }
        }
      }
    `,
  ],
})
export class ModalResponderComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<string>();
  respuesta = '';

  cerrar() {
    this.close.emit();
    this.respuesta = '';
  }

  enviar() {
    if (this.respuesta.trim()) {
      this.submit.emit(this.respuesta);
      this.cerrar();
    }
  }
}
