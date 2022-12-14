import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarAsistenciaPage } from './listar-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ListarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarAsistenciaPageRoutingModule {}
