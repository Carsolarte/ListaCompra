import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EditarListaComponent } from './components/editar-lista/editar-lista.component';
import { CrearListaComponent } from './components/crear-lista/crear-lista.component';
import { EliminarListaComponent } from './components/eliminar-lista/eliminar-lista.component';
import { VisualizarListaComponent } from './components/visualizar-lista/visualizar-lista.component';

import { ListasService } from './services/listas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EditarListaComponent,
    CrearListaComponent,
    EliminarListaComponent,
    VisualizarListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
