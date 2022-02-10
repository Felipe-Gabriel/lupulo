import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { LupulosRoutingModule } from './lupulos-routing.module';
import { LupulosComponent } from './lupulos/lupulos.component';
import { FormularioComponent } from './formulario/formulario.component';




@NgModule({
  declarations: [
    LupulosComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    LupulosRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LupulosModule { }
