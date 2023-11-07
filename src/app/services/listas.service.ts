import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { ShoppingList } from '../models/ShoppingList';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class ListasService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }

   // Obtener listas de un usuario
   getListsByUser(userId: User): Observable<any> {
    return this.http.get(`${this.API_URI}/user/${userId}`);
  }
   // Obtener una lista en específico por su ID
   getListById(id: string): Observable<any> {
    return this.http.get(`${this.API_URI}/shoppingList/${id}`);
  }
  getShoppingLista(id:number) {
    console.log( this.http.get(`${this.API_URI}/shoppingList/${id}`));
    return this.http.get(`${this.API_URI}/shoppingList/${id}`);
    }

  saveShoppingLista(lista: ShoppingList) {
    
    return this.http.post(`${this.API_URI}/shoppingList/`, lista);
  }
  updateShoppingLista(id: number, updatedLista: ShoppingList) {
    console.log(updatedLista);
    return this.http.put(`${this.API_URI}/shoppingList/${id}`, updatedLista);
  } 
  deleteShoppingLista(id: number): Observable<any> {
    return this.http.delete(`${this.API_URI}/shoppingList/${id}`);
  }
}
