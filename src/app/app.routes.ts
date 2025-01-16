import { Routes } from '@angular/router';
import {Ejercicio1Component} from "./ejercicio1/ejercicio1.component";
import {HomeComponent} from "./home/home.component";
import {Ejercicio2Component} from "./ejercicio2/ejercicio2.component";
import {Ejercicio3Component} from "./ejercicio3/ejercicio3.component";
import {Ejercicio4Component} from "./ejercicio4/ejercicio4.component";
import {Ejercicio5Component} from "./ejercicio5/ejercicio5.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'ejercicio1',component: Ejercicio1Component},
  {path: 'ejercicio2',component: Ejercicio2Component},
  {path: 'ejercicio3',component: Ejercicio3Component},
  {path: 'ejercicio4',component: Ejercicio4Component},
  {path: 'ejercicio5',component: Ejercicio5Component},
];
