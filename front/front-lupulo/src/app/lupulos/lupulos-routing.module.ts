import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LupulosComponent } from './lupulos/lupulos.component';

const routes: Routes = [
  { path: '', component: LupulosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LupulosRoutingModule { }
