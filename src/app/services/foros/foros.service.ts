import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ForoService {
  constructor(private http: HttpClient) {}

  getForos(): Observable<any[]> {
    return this.http.get<any[]>('/api/foros');
  }

  getRespuestas(foroId: number) {
    return this.http.get<any[]>(`/api/foros/${foroId}/respuestas`);
  }

  agregarRespuesta(foroId: number, userId: number, contenido: string) {
    return this.http.post('/api/foros/' + foroId + '/respuestas', {
      foroId,
      userId,
      contenido,
    });
  }

  agregarForo(userId: number, titulo: string, contenido: string) {
    return this.http.post('/api/foros', { userId, titulo, contenido });
  }

 eliminarForo(foroId: number, userId: number) {
  return this.http.delete(`/api/foros/${foroId}`, { body: { userId } });
}

  editarForo(
    foroId: number,
    userId: number,
    titulo: string,
    contenido: string,
    estado: string
  ) {
    return this.http.put(`/api/foros/${foroId}`, {
      userId,
      titulo,
      contenido,
      estado,
    });
  }
}
