import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LupulosService } from '../services/lupulos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  constructor(
    private fb : FormBuilder,
    private rest: LupulosService,
    public dialogRef: MatDialogRef<FormularioComponent>
  ) { }

  ngOnInit(): void { }
    lupuloForm = this.fb.group({
      id_:['', [Validators.required]],
      especie:['', [Validators.required]],
      descricao:['', [Validators.required]],
      pais_origem: ['', [Validators.required]],
      semelhantes:['', [Validators.required]],
      finalidade: ['', [Validators.required]]
    });


  createLupulo(){
    this.rest.postLupulo(this.lupuloForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.lupuloForm.reset();
    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
  }


}
