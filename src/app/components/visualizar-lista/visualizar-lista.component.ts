import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { User } from 'src/app/models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { ListasService } from 'src/app/services/listas.service';

@Component({
  selector: 'app-visualizar-lista',
  templateUrl: './visualizar-lista.component.html',
  styleUrls: ['./visualizar-lista.component.css']
})
export class VisualizarListaComponent implements OnInit{
   user: User = {
    userid: 0, // Reemplaza con el ID del usuario que deseas obtener
    username: '',
    password: '',
    user_name: ''
  };
  shoppingLists: ShoppingList[]=[];

  constructor(
    private shoppingListService: ListasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Obtener el ID del usuario desde la ruta
    this.route.params.subscribe(params => {
      this.user.userid = +params['id']; // Asigna el valor a user.userid
    });

    // Llama al método para obtener las listas de compras
    this.getShoppingLists();
  }

  // Método para obtener las listas de compras
  getShoppingLists() {
    this.shoppingListService.getListsByUser(this.user).subscribe((data: ShoppingList[]) => {
      this.shoppingLists = data;
    });
  }
}
