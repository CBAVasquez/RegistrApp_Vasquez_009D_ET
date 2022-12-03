import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrousuarioPageRoutingModule } from './registrousuario-routing.module';

import { RegistrousuarioPage } from './registrousuario.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrousuarioPageRoutingModule
  ],
  declarations: [RegistrousuarioPage]
})
export class RegistrousuarioPageModule {}
