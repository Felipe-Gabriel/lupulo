import { LupulosService } from './../services/lupulos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Lupulo } from '../models/lupulo';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-lupulos',
  templateUrl: './lupulos.component.html',
  styleUrls: ['./lupulos.component.scss']
})
export class LupulosComponent implements OnInit {

  lupulos$: Observable<Lupulo[]>;
  displayedColumns = ['especie','descricao','pais_origem','semelhantes','finalidade'];

  //lupulosService: LupulosService;

  constructor(
    private lupulosService: LupulosService,
    public dialog: MatDialog
    ) {
    //this.lupulos = []
    //this.lupulosService = new LupulosService();
    this.lupulos$ = this.lupulosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar lúpulos.');
        return of([])
      }
    ));
   }
   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {
  }

}
