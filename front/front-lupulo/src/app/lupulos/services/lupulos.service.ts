import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LupulosService {

  //private readonly API = '/assets/lupulo.json';
  private readonly API = 'http://localhost:3000/api/lupulo/';

  constructor(private httpClient: HttpClient) { }


  postLupulo(data : any){
    return this.httpClient.post<any>("http://localhost:3000/api/lupulo/",data);
  }
  getLupulo(){
    return this.httpClient.get<any>("http://localhost:3000/api/lupulo/");
  }

  deleteLupulo(lupulo_id: number) {
    return this.httpClient.delete<any>("http://localhost:3000/api/lupulo/"+lupulo_id);
  }

  putLupulo(data:any, lupulo_id : number){
    return this.httpClient.put<any>("http://localhost:3000/api/lupulo/"+lupulo_id ,data);
  }

}
