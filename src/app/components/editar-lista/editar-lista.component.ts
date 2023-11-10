// Importa OnInit para implementar el ciclo de vida ngOnInit
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingList, ShoppingListParam } from 'src/app/models/ShoppingList';
import { ListasService } from 'src/app/services/listas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Lista, ListaParam, ListaParamUpdate } from 'src/app/models/Lista';
import { Producto } from 'src/app/models/Producto';
import { Location } from '@angular/common';


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
    private location: Location
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
  //modal de agregar producto
  
  mostrarModalAddProduct = false;
  productoId=0;
  estadoProducto = '';
  availableProducts:Producto[]=[];

  mostrarModalEditTitle = false;
  newTitle = '';

  mostrarModalEditProduct = false;
  newState='';

  getProducs(){    
    this.productoService.getProducts().subscribe(data => {
      this.availableProducts = data;
      });
  }
  abrirModalAgregarProducto() {
    this.mostrarModalAddProduct = true;
  }
  abrirModalEditProduct() {
    this.mostrarModalEditProduct = true;
  }
  abrirModalEditTile() {
    this.mostrarModalEditTitle = true;
  }
  cerrarModal() {
    this.mostrarModalEditProduct=false;
    this.mostrarModalEditTitle=false;
    this.mostrarModalAddProduct = false;
    this.estadoProducto='';
    this.estadoProducto='';
    this.newTitle='';
    this.newState='';
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
       this.cerrarModal();
    }
  }

  editProductSelect(id: number) {
    if(this.newState!=''){
      const newListTitle:ListaParamUpdate={
        list_product_state: this.newState
      }
      this.productoService.updateProductList(id,newListTitle).subscribe(data => {
        this.getProductsLists();
       });;
    
      this.cerrarModal();
    }
  }
  editTite() {
    if(this.newTitle!=''){
      const newListTitle:ShoppingListParam={
        list_name: this.newTitle
      }
      this.shoppingListService.updateShoppingLista(this.listaId,newListTitle).subscribe(data => {
        this.getShoppingLists();
       });;
    
      this.cerrarModal();
    }
  }

  goBack() {
    this.location.back();
  }
}
