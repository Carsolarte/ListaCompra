import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarListaComponent } from './components/visualizar-lista/visualizar-lista.component';
import { EditarListaComponent } from './components/editar-lista/editar-lista.component';
import { EliminarListaComponent } from './components/eliminar-lista/eliminar-lista.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'shoppinglists', component:VisualizarListaComponent},
  {path: 'login',component:LoginComponent},
 
  {path: 'editarLista/:id', component: EditarListaComponent},
  {path: 'eliminarLista/:id', component: EliminarListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
