import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { ListasService } from 'src/app/services/listas.service';



@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.css']
})
export class EditarListaComponent {
  listaId: number =1;
  shoppingList: ShoppingList | undefined;
  
  constructor(
    private shoppingListService: ListasService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listaId = params['id']; // Obtiene el valor del parámetro 'id' de la URL
      // Aquí puedes realizar acciones con la listaId, como cargar los datos de esa lista.
    }
    
    );
  }
  getShoppingLists() {
    this.shoppingListService.getShoppingLista(this.listaId).subscribe(data => {
      this.shoppingList = data;
    });
  }
  


}
