import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {

  listaPalabras:string[] = ['JavaScript', 'TypeScript', 'Node','React', 'Angular'];
  palabra: string = '';
  mensaje: string = '';

  buscarPalabra(lista: string[], palabra:string){
    let posicion = lista.indexOf(palabra);
    if (posicion != -1){
      this.mensaje =  "Posición de " + palabra + " en la lista "+ posicion +"º";
    }else{
      this.mensaje = "Palabra no encontrada."
    }
  }

  addPalabraNoDuplicada(lista: string[], palabra:string){
    if (palabra == '' ){
      this.mensaje = "Por favor escribe una palabra."
    }else{
      if (lista.filter(x => x === palabra).length != 0){
        this.mensaje = ("No se ha podido añadir la palabra a la lista.")
      }else{
        lista.push(palabra);
        this.mensaje = "Palabra añadida a la lista.";
      }
    }
  }

  ordernarAlfabeticamente(lista:string[]){
    this.mensaje = "Lista ordenada alfabéticamente."
    return lista.sort((a, b) => a.localeCompare(b));
  }
}
