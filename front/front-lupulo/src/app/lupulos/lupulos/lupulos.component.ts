
import { LupulosService } from './../services/lupulos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Lupulo } from '../models/lupulo';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { FormularioComponent } from '../formulario/formulario.component'

@Component({
  selector: 'app-lupulos',
  templateUrl: './lupulos.component.html',
  styleUrls: ['./lupulos.component.scss']
})
export class LupulosComponent implements OnInit {
  [x: string]: any;

  lupulos$: Observable<Lupulo[]>;
  displayedColumns = ['especie','descricao','pais_origem','semelhantes','finalidade','editar','deletar'];

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

  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      minWidth: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    });
  }

  deletar(_id : string) {
    this.lupulosService.deleteLupulo(_id)
  }
}


