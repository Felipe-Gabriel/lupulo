import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { LupulosService } from './../services/lupulos.service';


@Component({
  selector: 'app-lupulos',
  templateUrl: './lupulos.component.html',
  styleUrls: ['./lupulos.component.scss']
})
export class LupulosComponent implements OnInit {

  displayedColumns = ['especie','descricao','pais_origem','semelhantes','finalidade','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: LupulosService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllLupulo();
  }

  openDialog() {
    this.dialog.open(FormularioComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllLupulo();
      }
    });
  }
  getAllLupulo() {
    this.api.getLupulo()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert('Erro ao carregar lúpulos.')
      }
    })
  }
  editLupulo(row : any){
    this.dialog.open(FormularioComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllLupulo();
      }
    })
  }
  deleteLupulo(lupulo_id:number){
    this.api.deleteLupulo(lupulo_id)
    .subscribe({
      next:(res)=>{
       alert("Product Delete Successfully");
       this.getAllLupulo();
      },
      error:()=>{
        alert("Error while deleting the hops!!")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


