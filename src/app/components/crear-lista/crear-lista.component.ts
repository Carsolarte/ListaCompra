import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-lista',
  templateUrl: './crear-lista.component.html',
  styleUrls: ['./crear-lista.component.css']
})
export class CrearListaComponent {
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
    console.log('Guardando lista:', this.nombreLista);
    this.cerrarModal();
  }

}
