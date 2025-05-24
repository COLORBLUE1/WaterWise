import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-modal-eliminar',
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="cancelar()"></div>
    <div class="modal-content" (click)="$event.stopPropagation()">
      <h3>¿Seguro que quieres eliminar este foro?</h3>
      <p *ngIf="foro">
        <strong><span>Foro titulo:</span> {{ foro.titulo }}</strong>
      </p>
      <div class="botones">
        <button (click)="confirmar()">Sí, eliminar</button>
        <button (click)="cancelar()">Cancelar</button>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-backdrop {
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
        align-items: center;

        h3 {
          color: #000;
          text-align: center;
        }

        p {
          color: rgb(65, 66, 68);
          span {
            color: red;
          }
        }
      }

      .botones {
        display: flex;
        gap: 1rem;
        button {
          width: 120px;
          background: #e5e0ff;
          padding: 10px;
          border-radius: 35px;
          border: none;
          color: #00000096;
          cursor: pointer;
          &:hover {
            background: #ffb4b4;
          }
        }
      }
    `,
  ],
})

export class ModalEliminarComponent {
  @Input() foro: any;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  cancelar() {
    this.close.emit();
  }

  confirmar() {
    this.confirm.emit();
  }
}
