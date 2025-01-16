import {Component, Input} from '@angular/core';
import {CommonModule, NgForOf, SlicePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [
    NgForOf,
    SlicePipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {


  ngOnInit(){
    this.obtenerMejoresCalificadas()
  }

  @Input() mensajeError: string = '';

    catalogo: Pelicula[] = [
    { titulo: 'Pelicula 1', director: 'Director C', estreno: 2001, genero: 'Acción', calificacion: 8.82 },
    { titulo: 'Pelicula 2', director: 'Director X', estreno: 2002, genero: 'Comedia', calificacion: 8.03 },
    { titulo: 'Pelicula 3', director: 'Director A', estreno: 2003, genero: 'Drama', calificacion: 9.1 },
    { titulo: 'Pelicula 4', director: 'Director L', estreno: 2004, genero: 'Terror', calificacion: 6.67 },
    { titulo: 'Pelicula 5', director: 'Director Y', estreno: 2005, genero: 'Acción', calificacion: 7.35 },
    { titulo: 'Pelicula 6', director: 'Director M', estreno: 2006, genero: 'Ciencia Ficción', calificacion: 3.12 },
    { titulo: 'Pelicula 7', director: 'Director V', estreno: 2007, genero: 'Drama', calificacion: 9.9 },
    { titulo: 'Pelicula 8', director: 'Director B', estreno: 2008, genero: 'Fantasía', calificacion: 6.33 },
    { titulo: 'Pelicula 9', director: 'Director G', estreno: 2009, genero: 'Misterio', calificacion: 7.11 },
    { titulo: 'Pelicula 10', director: 'Director E', estreno: 2010, genero: 'Acción', calificacion: 5.23 }
  ];

    copiaCatalogo:Pelicula[]= this.catalogo;
    listaMejoresCalificadas:Pelicula[] = [];
    buscar: string = '';

    nombrePelicula: string = "";
    nuevaCalificacion:number = 0;

  refrescarCatalogo(){
    this.catalogo = this.copiaCatalogo;
  }
   buscarPeliculaGenero() {
     this.refrescarCatalogo()
     if (this.buscar.length != 0){
       this.catalogo = this.catalogo.filter(pelicula => pelicula.genero === this.buscar);
     }
   }

   obtenerMejoresCalificadas(){
     this.listaMejoresCalificadas = this.catalogo.sort((a, b) => b.calificacion - a.calificacion).slice(0,3);
   }

   calcularCalificacionMedia(){
     let calificacionTotal = 0;
     for (let i = 0; i < this.copiaCatalogo.length; i++){
       calificacionTotal += this.copiaCatalogo[i].calificacion;
     }
     return (calificacionTotal/this.copiaCatalogo.length).toFixed(2)
   }

   actualizarCalificacion(){
    if (this.nombrePelicula === undefined || this.nombrePelicula.trim() === ''){
      this.mensajeError = "No se ha encontrado una película con ese nombre "
      return;
    }
     if (this.nuevaCalificacion < 0 || this.nuevaCalificacion > 10) {
       this.mensajeError = "La calificación de la película debe ser entre el 0 y el 10.";
       return;
     }
     let peliculaEncontrada = false;
     for (let i = 0; i < this.copiaCatalogo.length; i++) {
       if (this.copiaCatalogo[i].titulo === this.nombrePelicula) {
         this.copiaCatalogo[i].calificacion = Number(this.nuevaCalificacion);
         peliculaEncontrada = true;
         this.refrescarCatalogo();
         this.calcularCalificacionMedia();
         this.obtenerMejoresCalificadas();
         this.mensajeError = '';
         return;
       }
     }
     if (!peliculaEncontrada) {
       this.mensajeError = "No se ha encontrado una película con ese nombre";
     }
  }
}


class Pelicula {
  titulo: string = '';
  director: string = '';
  estreno: number = 0;
  genero: string = '';
  calificacion: number = 0;

  constructor() {
  }
}
