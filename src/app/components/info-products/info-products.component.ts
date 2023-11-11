import { Component } from '@angular/core';
import { ShoppingList, ShoppingListParam } from 'src/app/models/ShoppingList';
import { Router, ActivatedRoute } from '@angular/router';
import { ListasService } from 'src/app/services/listas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductParam, Producto } from 'src/app/models/Producto';
import { Proveedor, ProveedorParam } from 'src/app/models/Proveedor';

import { Location } from '@angular/common';
@Component({
  selector: 'app-info-products',
  templateUrl: './info-products.component.html',
  styleUrls: ['./info-products.component.css']
})
export class InfoProductsComponent {

  products: Producto[] = [];
  suppliers: Proveedor[] = []
  constructor(private productoService: ProductoService,
    private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.getSupplier();
  }

  mostrarModalAddProv = false;
  mostrarModalAddProd = false;
  getProducts() {
    this.productoService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
  getSupplier() {
    this.productoService.getSuppliers().subscribe(data => {
      this.suppliers = data;
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
  nuevoPrecio: number = 0;
  nuevoProveedorProdcuto: number = 0;

  mostrarModalAgregarProveedor() {
    this.mostrarModalAddProv = true;
  }
  mostrarModalAgregarProducto() {
    this.mostrarModalAddProd = true;
  }

  cerrarModal() {
    this.mostrarModalAddProv = false;
    this.mostrarModalAddProd = false;
    this.nuevoProducto = '';
    this.nuevoProveedor = '';
    this.nuevoPrecio = 0;
    this.nuevoProveedorProdcuto = 0;
  }
  addProduct() {
    if (this.nuevoProducto != '' && this.nuevoPrecio > 0 && this.nuevoProveedorProdcuto != 0) {
      const producto: ProductParam = {
        product_name: this.nuevoProducto,
        product_price: this.nuevoPrecio,
        supplierid: this.nuevoProveedorProdcuto
      }
      this.productoService.addProduct(producto).subscribe(data => {
        this.getProducts();
      })
    }
    this.cerrarModal();
  }

  deleteProduct(id:number){
    console.log("entrooo")
    this.productoService.deleteProduct(id).subscribe(data=>{
      this.getProducts();
    })
  }
  addSupplier() {
    if (this.nuevoProveedor != '' && this.nuevoProducto != null) {
      const supplier: ProveedorParam = {
        supplier_name: this.nuevoProveedor
      }
      this.productoService.addSupplier(supplier).subscribe(data => {
        this.getSupplier();
      })
    }
    this.cerrarModal();
  }
  deleteSupplier(id: number) {
    console.log("entro")
    this.productoService.deleteSupplier(id).subscribe(data => {
      this.getSupplier();
    });
  }
}
