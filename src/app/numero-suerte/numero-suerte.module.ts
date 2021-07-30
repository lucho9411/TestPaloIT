import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { numeroSuerteRouting } from './numeroSuerte-routing.module';



@NgModule({
  declarations: [
    PantallaInicialComponent
  ],
  imports: [
    CommonModule,
    numeroSuerteRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule
  ]
})
export class NumeroSuerteModule { }
