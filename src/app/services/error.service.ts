import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errors: Record<string, boolean> = {};

  constructor(private toastr: ToastrService) { }

  msjError(e: HttpErrorResponse) {
    if (e.error.msg) {
      this.toastr.error(e.error.msg, 'Error');
    } else {
      this.toastr.error('Upps ocurrio un error, comuniquese con el administrador', 'Error');
    }
  }
  
  private loginError: boolean = false;

  // Método para establecer un error de inicio de sesión
  public setLoginError(): void {
    this.loginError = true;
  }
    // Método para verificar si hay un error de inicio de sesión
    public hasLoginError(): boolean {
      return this.loginError;
    }
  

  // Método para verificar si hay errores en un campo específico
  public hasError(field: string): boolean {
    return this.errors[field] || false;
  }

  // Método para establecer un error en un campo
  public setError(field: string): void {
    this.errors[field] = true;
  }

  // Método para borrar un error en un campo
  public clearError(field: string): void {
    this.errors[field] = false;
  }
  public setGenericError(): void {
    this.errors['generic'] = true;
  }

}