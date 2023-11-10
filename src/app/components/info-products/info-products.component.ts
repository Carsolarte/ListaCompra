import { Component } from '@angular/core';
import { ShoppingList, ShoppingListParam } from 'src/app/models/ShoppingList';
import { Router, ActivatedRoute } from '@angular/router';
import { ListasService } from 'src/app/services/listas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/Producto';
import { Proveedor } from 'src/app/models/Proveedor';

@Component({
  selector: 'app-info-products',
  templateUrl: './info-products.component.html',
  styleUrls: ['./info-products.component.css']
})
export class InfoProductsComponent {

  products: Producto[] = [];
  suppliers:Proveedor[]=[]
  constructor(private productoService: ProductoService,
    private route: ActivatedRoute){

    }

    ngOnInit(): void {
    this.getProducts();
    this.getSupplier();
    }

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

}
