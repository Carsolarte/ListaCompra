import { Component } from '@angular/core';
import { ShoppingList, ShoppingListParam } from 'src/app/models/ShoppingList';
import { Router, ActivatedRoute } from '@angular/router';
import { ListasService } from 'src/app/services/listas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/Producto';
import { Proveedor } from 'src/app/models/Proveedor';

import { Location } from '@angular/common';
@Component({
  selector: 'app-info-products',
  templateUrl: './info-products.component.html',
  styleUrls: ['./info-products.component.css']
})
export class InfoProductsComponent {

  products: Producto[] = [];
  suppliers:Proveedor[]=[]
  constructor(private productoService: ProductoService,
    private route: ActivatedRoute,private location: Location){

    }

    ngOnInit(): void {
    this.getProducts();
    this.getSupplier();
    }

    mostrarModalAddProv = false;
    mostrarModalAddProd = false;
    getProducts(){
      this.productoService.getProducts().subscribe(data=>{
        this.products=data;
      })
    }
    getSupplier(){
      this.productoService.getSuppliers().subscribe(data=>{
        this.suppliers=data;
      })
    }
    goBack() {
      this.location.back();
    }
    abrirModalAgregarProveedor() {
      this.mostrarModalAddProv = true;
    }
 
    abrirModalAgregarProducto() {
      this.mostrarModalAddProd = true;
    }
 
    nuevoProveedor: string = '';
    nuevoProducto: string = '';
  
    mostrarModalAgregarProveedor() {
      this.mostrarModalAddProv = true;
    }
    mostrarModalAgregarProducto() {
      this.mostrarModalAddProd = true;
    }
  
    cerrarModal() {
      this.mostrarModalAddProv = false;
      this.mostrarModalAddProd = false;
    }
  

}
