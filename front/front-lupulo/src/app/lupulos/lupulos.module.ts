import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { LupulosRoutingModule } from './lupulos-routing.module';
import { LupulosComponent } from './lupulos/lupulos.component';




@NgModule({
  declarations: [
    LupulosComponent
  ],
  imports: [
    CommonModule,
    LupulosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class LupulosModule { }
