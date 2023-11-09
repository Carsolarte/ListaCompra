import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from 'src/app/models/UserLogin';

import { ErrorService } from 'src/app/services/error.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UsuariosService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  login() {

    // Validamos que el usuario ingrese datos
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    // Creamos el body
    const userLogin: UserLogin = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._userService.login(userLogin).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/shoppinglists'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }

}
