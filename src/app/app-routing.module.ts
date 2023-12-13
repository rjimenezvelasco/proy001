import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MapaComponent } from './mapa/mapa.component';
import { FormuserComponent } from './formuser/formuser.component';


const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'formulario', component: FormularioComponent },
  { path:'mapa',component:MapaComponent},
  {path:'form',component:FormuserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
