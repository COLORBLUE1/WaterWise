import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class JuegosService {
  platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient) {}

 getJuegos() {
    if (isPlatformServer(this.platformId)) {
      // Estamos en prerender/SSR, devuelve array vacío o mock
      return of([]);
    }
    return this.http.get<any[]>('/api/juegos');
  }
}