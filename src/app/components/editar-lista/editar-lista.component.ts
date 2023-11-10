// Importa OnInit para implementar el ciclo de vida ngOnInit
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { ListasService } from 'src/app/services/listas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Lista, ListaParam } from 'src/app/models/Lista';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.css']
})
export class EditarListaComponent implements OnInit { // Implementa OnInit

  listaId: number = 0;
  shoppingList: ShoppingList | undefined;
  productList: Lista[] = [];

  constructor(
    private shoppingListService: ListasService,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listaId = params['id'];
    });

    this.getShoppingLists();
    this.getProductsLists();
    this.getProducs();
  }

  getShoppingLists() {
    this.shoppingListService.getShoppingLista(this.listaId).subscribe(data => {
      this.shoppingList = data;
    
     
    });
  }

  getProductsLists() {
    this.productoService.getProductoListas(this.listaId).subscribe(data => {
      // Mapea los productos a la estructura de Lista
      this.productList = data
      for (const productL of this.productList) {
        this.getProduct(productL)
        
      }
      });
  } 
  getProduct(productL: Lista){    
    this.productoService.getProduct(productL.productid).subscribe(data => {
      productL.producto = data;
      this.getSupplier(productL)
      });
  }

  getSupplier(productL: Lista){    
    this.productoService.getSupplier(productL.producto.supplierid).subscribe(data => {
      productL.supplier = data;
      });
  }
 
  eliminarProduct(id: number) {
    this.productoService.deleteShoppingLista(id).subscribe(data => {
      const index = this.productList.findIndex(item => item.id === id);
      if (index !== -1) {   
        this.productList.splice(index, 1);    
      }   
    });
  }

  productoId=0;
  productoNombre = '';
  estadoProducto = '';
  availableProducts:Producto[]=[];
  mostrarModal = false;

  getProducs(){    
    this.productoService.getProducts().subscribe(data => {
      this.availableProducts = data;
      });
  }
  abrirModalAgregarProducto() {
    this.mostrarModal = true;
  }
  cerrarModal() {
    this.mostrarModal = false;
    this.estadoProducto='';
    this.estadoProducto='';
  }
  agregarProducto() {
    if (this.productoId!=0  && this.estadoProducto != "" && this.estadoProducto != null) {
      const productoLista:ListaParam={
        listid: this.listaId,
        productid: this.productoId,
        list_product_state: this.estadoProducto
      }
      this.productoService.addProductoListas(productoLista).subscribe(data => {
        this.getProductsLists();
         
       });
    }
  }

}
