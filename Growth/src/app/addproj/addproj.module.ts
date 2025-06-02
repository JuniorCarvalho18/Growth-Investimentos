import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddprojPage } from './addproj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [AddprojPage], // Apenas AddprojPage deve ser declarado aqui
  exports: [AddprojPage], // Exporta o componente para ser usado em outros módulos
})
export class AddprojPageModule {}
