import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista, ListaParam, ListaParamUpdate } from '../models/Lista';
import { Producto } from '../models/Producto';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  API_URI = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }

  getProductoListas(id:number): Observable<Lista[]> {
    return this.http.get<Lista[]>(`${this.API_URI}/listProduct/${id}`)
  }
  getProduct(id:number): Observable<Producto> {
    return this.http.get<Producto>(`${this.API_URI}/product/${id}`)
  }
  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.API_URI}/product`)
  }

  updateProductList(id: number, updatedLista: ListaParamUpdate) {
    console.log(id)
    return this.http.put(`${this.API_URI}/listProduct/${id}`, updatedLista);
  }

  getSupplier(id:number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.API_URI}/supplier/${id}`)
  }
  addProductoListas(lista:ListaParam)  {
   return this.http.post(`${this.API_URI}/listProduct`,lista)
  }
  deleteShoppingLista(id: number): Observable<any> {
    return this.http.delete(`${this.API_URI}/listProduct/${id}`);
  }
  getSuppliers(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.API_URI}/supplier`)
  }
  

}