// Importa OnInit para implementar el ciclo de vida ngOnInit
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { ListasService } from 'src/app/services/listas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Lista } from 'src/app/models/Lista';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.css']
})
export class EditarListaComponent implements OnInit { // Implementa OnInit

  listaId: number = 1;
  shoppingList: ShoppingList | undefined;
  productList: Lista[] = [];
  product: Producto | undefined;

  constructor(
    private shoppingListService: ListasService,
    private productoService: ProductoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listaId = params['id'];
    });

    this.getShoppingLists();
    this.getProductsLists();
    this.getProduct(2);
  }

  getShoppingLists() {
    this.shoppingListService.getShoppingLista(this.listaId).subscribe(data => {
      this.shoppingList = data;
      console.log(this.shoppingList);
    });
  }

  getProductsLists() {
    this.productoService.getProductoListas(this.listaId).subscribe(data => {
      // Mapea los productos a la estructura de Lista
      this.productList = data.map(product => ({
        id: product.id,
        product_id: product.product_id,
        list_product_state: product.list_product_state,
        product_name: product.product_name,
        producto_price: product.producto_price
      }));
      console.log(this.productList);
    });
  }
  getProduct(id: number) {
    this.productoService.getProduct(id).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }
  
}
