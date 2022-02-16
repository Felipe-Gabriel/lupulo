import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { LupulosService } from '../services/lupulos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  freshnessList = ["Amargor", "Aroma", "Aroma/Amargor"];
  lupuloForm !: FormGroup;
  actionBtn : string = "Save"

  constructor(
    private formBuilder : FormBuilder,
    private api: LupulosService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    public dialogRef: MatDialogRef<FormularioComponent>) { }

  ngOnInit(): void {
    this.lupuloForm = this.formBuilder.group({
      especie : ['',Validators.required],
      descricao : ['',Validators.required],
      pais_origem : ['',Validators.required],
      semelhantes : ['',Validators.required],
      finalidade : ['',Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Update"
      this.lupuloForm.controls['especie'].setValue(this.editData.especie);
      this.lupuloForm.controls['descricao'].setValue(this.editData.descricao);
      this.lupuloForm.controls['pais_origem'].setValue(this.editData.pais_origem);
      this.lupuloForm.controls['semelhantes'].setValue(this.editData.semelhantes);
      this.lupuloForm.controls['finalidade'].setValue(this.editData.finalidade)
    }
  }


  addLupulo(){
    console.log('1');
    if(!this.editData){
      console.log('2');
      if(this.lupuloForm.valid){
        console.log('3');
        this.api.postLupulo(this.lupuloForm.value)
        .subscribe({
          next:(res)=>{
            alert("Product added successfully");
            this.lupuloForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while addind the product")
          }
        })
      }
     }else{
      console.log('4');
       this.updateLupulo()
     }
     console.log('5');
  }

  updateLupulo(){
    this.api.putLupulo(this.lupuloForm.value, this.editData.lupulo_id)
    .subscribe({
      next:(res)=>{
        alert("Lupulo update Sucessfully");
        this.lupuloForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while")
      }
    })
  }
}
