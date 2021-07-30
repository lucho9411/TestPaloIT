import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const Approutes: Routes = [

  {
    path: '',
    redirectTo: 'numeroSuerte',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [{
      path: 'numeroSuerte',
      loadChildren: () => import('./numero-suerte/numero-suerte.module').then(m => m.NumeroSuerteModule) 
    }]
  }
];