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

  agregarRespuesta(foroId: number, texto: string): Observable<any> {
    return this.http.post(`/api/foros/${foroId}/respuestas`, { texto });
  }
  
}