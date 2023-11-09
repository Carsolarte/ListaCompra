import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { Router, ActivatedRoute } from '@angular/router';
import { ListasService } from 'src/app/services/listas.service';

@Component({
  selector: 'app-visualizar-lista',
  templateUrl: './visualizar-lista.component.html',
  styleUrls: ['./visualizar-lista.component.css']
})
export class VisualizarListaComponent implements OnInit{

  shoppingLists: ShoppingList[]=[];

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
    this.router.navigate(['/eliminarLista', shoppingListId]);
  }
  crearLista() {
    this.router.navigate(['/crearLista']);
  }
}
