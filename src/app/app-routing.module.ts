import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { ReservanosComponent } from './components/reservanos/reservanos.component';
import { ReglamentoComponent } from './components/reglamento/reglamento.component';
const routes: Routes = [
  {
    path : '',
    redirectTo : '/reservaciones' ,
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
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
