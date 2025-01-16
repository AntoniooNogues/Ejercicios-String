import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

class Dia{
  fecha?:Date;
  temperatura:number;
  humedad:number;
  precipitacion:number;

  constructor(fecha: Date, temperatura: number, humedad: number, precipitacion: number) {
    this.fecha = fecha;
    this.temperatura = temperatura;
    this.humedad = humedad;
    this.precipitacion = precipitacion;
  }
}

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {

  ngOnInit(){
      this.devolverString();
      console.log(this.listaString);
  }
  listaDias: Dia[] = [
    { fecha: new Date('2024-08-24'), temperatura: 29.9, humedad: 13, precipitacion: 27.5 },
    { fecha: new Date('2024-11-16'), temperatura: -2.7, humedad: 5, precipitacion: 11.3 },
    { fecha: new Date('2024-08-06'), temperatura: 2.3, humedad: 85, precipitacion: 18.2 },
    { fecha: new Date('2024-12-01'), temperatura: 11.8, humedad: 85, precipitacion: 48.0 },
    { fecha: new Date('2024-03-20'), temperatura: -5.6, humedad: 7, precipitacion: 0 },
    { fecha: new Date('2024-03-29'), temperatura: -5.7, humedad: 96, precipitacion: 28.3 },
    { fecha: new Date('2024-12-21'), temperatura: 22.0, humedad: 32, precipitacion: 48.5 },
    { fecha: new Date('2024-10-03'), temperatura: 11.5, humedad: 9, precipitacion: 35.1 },
    { fecha: new Date('2024-08-30'), temperatura: 25.0, humedad: 58, precipitacion: 44.4 },
    { fecha: new Date('2024-05-30'), temperatura: -4.7, humedad: 61, precipitacion: 8.8 },
    { fecha: new Date('2024-06-12'), temperatura: 23.9, humedad: 23, precipitacion: 0 },
    { fecha: new Date('2024-07-05'), temperatura: 24.9, humedad: 14, precipitacion: 17.2 },
    { fecha: new Date('2024-12-19'), temperatura: -4.6, humedad: 98, precipitacion: 37.3 },
    { fecha: new Date('2024-01-04'), temperatura: 15.9, humedad: 13, precipitacion: 22.5 },
    { fecha: new Date('2024-08-29'), temperatura: 4.5, humedad: 21, precipitacion: 45.7 },
    { fecha: new Date('2024-05-20'), temperatura: 7.7, humedad: 95, precipitacion: 26.4 },
    { fecha: new Date('2024-11-24'), temperatura: 4.8, humedad: 19, precipitacion: 30.1 },
    { fecha: new Date('2024-07-26'), temperatura: 6.8, humedad: 89, precipitacion: 4.7 },
    { fecha: new Date('2024-07-28'), temperatura: -9.2, humedad: 28, precipitacion: 46.5 },
    { fecha: new Date('2024-02-24'), temperatura: -3.4, humedad: 97, precipitacion: 0}
  ];

  listaString:string[]=[];

  temperaturaMedia() {
    let suma: number = 0
    for (let index = 0; this.listaDias.length > index; index++) {
      suma += this.listaDias[index].temperatura;
    }
    return suma / this.listaDias.length;
  }

  filtrarDiasLluvia() {
    return this.listaDias.filter(dia => dia.precipitacion > 0).length;
  }

  temperaturaMasAlta() {
    let dia: Dia | null = null;
    for (let index = 0; this.listaDias.length > index; index++) {
      if (index === 0) {
        dia = this.listaDias[0];
      } else if (dia && dia.temperatura < this.listaDias[index].temperatura) {
        dia = this.listaDias[index];
      }
    }
    return dia;
  }

  devolverString(){
    this.listaString.push("Resumen del mes: ");
    this.listaString.push("Días lluviosos del mes: "+ this.filtrarDiasLluvia().toString());
    this.listaString.push("Temperatura promedio: "+ this.temperaturaMedia().toFixed(0).toString()+"ºC");
    this.listaString.push("Máxima temperatura " + this.temperaturaMasAlta()?.temperatura.toFixed(0).toString()+"ºC  el dia "+ this.temperaturaMasAlta()?.fecha?.toLocaleDateString() || "N/A")
  }

}


