import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAsistenciaPageRoutingModule } from './listar-asistencia-routing.module';

import { ListarAsistenciaPage } from './listar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarAsistenciaPageRoutingModule
  ],
  declarations: [ListarAsistenciaPage]
})
export class ListarAsistenciaPageModule {}
