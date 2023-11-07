import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarListaComponent } from './components/visualizar-lista/visualizar-lista.component';
import { CrearListaComponent } from './components/crear-lista/crear-lista.component';
import { EditarListaComponent } from './components/editar-lista/editar-lista.component';
import { EliminarListaComponent } from './components/eliminar-lista/eliminar-lista.component';

const routes: Routes = [
  {path: 'shoppinglists/user/:id', component:VisualizarListaComponent},
  {path: 'crearLista', component:CrearListaComponent},
  {path: 'editarLista', component: EditarListaComponent},
  {path: 'eliminarLista', component: EliminarListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
