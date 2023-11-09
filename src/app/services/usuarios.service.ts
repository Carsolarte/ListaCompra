import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }
  
  login(user: UserLogin): Observable<string> {
   
    return this.http.post<string>(`${this.API_URI}/users/login`, user)
   }
  getUsuarios(){
    return this.http.get('http://localhost:3000/api/users');
  }

}
