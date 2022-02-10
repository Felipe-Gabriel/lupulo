import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lupulo } from '../models/lupulo';
import { delay, first, tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LupulosService {

  //private readonly API = '/assets/lupulo.json';
  private readonly API = 'http://localhost:3000/api/lupulo';

  constructor(private httpClient: HttpClient) { }

  public postLupulo(lupulo: any): Observable<Lupulo>{
    return this.httpClient.post<any>(this.API, lupulo)
  }

  list() {
    return this.httpClient.get<Lupulo[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(lupulos => console.log(lupulos))
    );
  }

  public deleteLupulo(_id: string) {
    return this.httpClient.delete<void>(`${this.API}/${_id}`).pipe(take(1));
  }

  public updateLupulo(Lupulo: any) {
    return this.httpClient.put(`${this.API}/${Lupulo._id}`, Lupulo).pipe(take(1));
  }

}
