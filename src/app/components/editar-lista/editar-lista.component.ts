import { Component } from '@angular/core';
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
export class EditarListaComponent {
  listaId: number =1;
  shoppingList: ShoppingList | undefined;
  productList: Lista[]=[];
  product: Producto | undefined;
  
  constructor(
    private shoppingListService: ListasService,
    private productoService: ProductoService,

    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listaId = params['id']; // Obtiene el valor del parámetro 'id' de la URL
      // Aquí puedes realizar acciones con la listaId, como cargar los datos de esa lista.
    }
    
    );
    this.getShoppingLists();
    this.getProductsLists();
    this.getProduct(2);
  }
  //devuelve la lista ingresada por el id
  getShoppingLists() {
    this.shoppingListService.getShoppingLista(this.listaId).subscribe(data => {
      this.shoppingList = data;
      console.log(this.shoppingList)
    });
  }
  //devuelve los productos de la lista
  getProductsLists() {
    this.productoService.getProductoListas(this.listaId).subscribe(data => {
      this.productList = data;
      console.log(this.productList)
    });
  }

  //devuelve el producto
  getProduct(id:number) {
    this.productoService.getProduct(id).subscribe(data => {
      this.product = data;
      console.log(this.product)
    });
  }

}
