import { Component, OnInit } from '@angular/core';
import { ShoppingList, ShoppingListParam } from 'src/app/models/ShoppingList';
import { Router, ActivatedRoute } from '@angular/router';
import { ListasService } from 'src/app/services/listas.service';

@Component({
  selector: 'app-visualizar-lista',
  templateUrl: './visualizar-lista.component.html',
  styleUrls: ['./visualizar-lista.component.css']
})
export class VisualizarListaComponent implements OnInit {

  shoppingLists: ShoppingList[] = [];

  constructor(
    private shoppingListService: ListasService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Llama al método para obtener las listas de compras
    this.getShoppingLists();
  }

  // Método para obtener las listas de compras
  getShoppingLists() {
    this.shoppingListService.getShoppingListas().subscribe(data => {
      this.shoppingLists = data;
    });
  }
  navigateToDetail(shoppingListId: number) {
    this.router.navigate(['/editarLista', shoppingListId]);
  }
  elimidarLista(shoppingListId: number) {
    this.shoppingListService.deleteShoppingLista(shoppingListId).subscribe(data => {
      const index = this.shoppingLists.findIndex(item => item.listid === shoppingListId);
      if (index !== -1) {
        this.shoppingLists.splice(index, 1);
      }
    });

  }

  mostrarModal = false;
  nombreLista = '';

  openCrearListaModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.nombreLista = ''; // Limpiar el nombreLista al cerrar el modal
  }

  guardarLista() {
    // Aquí puedes implementar la lógica para guardar la lista con this.nombreLista
    if (this.nombreLista != "" && this.nombreLista != null) {
      console.log('Guardando lista:', this.nombreLista);
      const lista: ShoppingListParam = {
        list_name: this.nombreLista,
      };
      this.shoppingListService.saveShoppingLista(lista).subscribe(data => {
       this.getShoppingLists()
        
      });
    }
    this.cerrarModal();
  }
}
