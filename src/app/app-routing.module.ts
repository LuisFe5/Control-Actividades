import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { ReservanosComponent } from './components/reservanos/reservanos.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/ingresar' ,
    pathMatch : 'full'
  },
  {
    path : 'reservaciones',
    component :  ReservacionesComponent
  },
  {
    path : 'contratos',
    component :  ContratoComponent
    
  },
  {
    path : 'reservanos',
    component :  ReservanosComponent
    
  },
  {
    path : 'reglamento',
    component :  ReglamentoComponent
    
  },
  {
    path : 'ingresar',
    component :  IngresarComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
