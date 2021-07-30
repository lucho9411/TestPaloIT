import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PantallaInicialComponent } from "./pantalla-inicial/pantalla-inicial.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: 'pantalla-inicial',
      pathMatch: 'full',
    },
    {
      path: '',
      children: [{
        path: 'pantalla-inicial',
        component: PantallaInicialComponent
      }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class numeroSuerteRouting { }