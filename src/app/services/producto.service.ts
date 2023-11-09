import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from '../models/Lista';
import { Producto } from '../models/Producto';

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
}