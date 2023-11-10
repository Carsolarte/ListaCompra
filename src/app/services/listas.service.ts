import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { ShoppingList, ShoppingListParam } from '../models/ShoppingList';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class ListasService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }

 
  getShoppingListas(): Observable<ShoppingList[]> {
    /*  const token = localStorage.getItem('token')
     const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) */
    /*     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) */
    return this.http.get<ShoppingList[]>(`${this.API_URI}/shoppingList/`)
  }
  getShoppingLista(id:number): Observable<ShoppingList> {
    /*  const token = localStorage.getItem('token')
     const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) */
    /*     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) */
    return this.http.get<ShoppingList>(`${this.API_URI}/shoppingList/${id}`)
  }
  /*getShoppingLista(id:number) {
    console.log( this.http.get(`${this.API_URI}/shoppingList/${id}`));
    return this.http.get(`${this.API_URI}/shoppingList/${id}`);
    }
*/ 
  saveShoppingLista(lista: ShoppingListParam) {
    
    return this.http.post(`${this.API_URI}/shoppingList/`, lista);
  }
  updateShoppingLista(id: number, updatedLista: ShoppingListParam) {
    return this.http.put(`${this.API_URI}/shoppingList/${id}`, updatedLista);
  } 
  deleteShoppingLista(id: number): Observable<any> {
    return this.http.delete(`${this.API_URI}/shoppingList/${id}`);
  }
}
