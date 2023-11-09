import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EditarListaComponent } from './components/editar-lista/editar-lista.component';

import { EliminarListaComponent } from './components/eliminar-lista/eliminar-lista.component';
import { VisualizarListaComponent } from './components/visualizar-lista/visualizar-lista.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosService } from './services/usuarios.service';
import { FormsModule } from '@angular/forms';
import { ListasService } from './services/listas.service';
import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule,HTTP_INTERCEPTORS  }from '@angular/common/http';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { ErrorService } from 'src/app/services/error.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EditarListaComponent,
 
    EliminarListaComponent,
    VisualizarListaComponent, 
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), BrowserAnimationsModule, 
    
  ],
  providers: [ListasService,UsuariosService,ErrorService,{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Añade esta línea
})
export class AppModule { }
