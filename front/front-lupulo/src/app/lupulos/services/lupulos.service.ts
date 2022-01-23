import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lupulo } from '../models/lupulo';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LupulosService {

  //private readonly API = '/assets/lupulo.json';
  private readonly API = 'http://localhost:3000/api/lupulo';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Lupulo[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(lupulos => console.log(lupulos))
    );
  }
}
