import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

class Plato {
  id: number;
  nombre: string;
  precio: number;

  constructor(id: number, nombre: string, precio: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Pedido {
  id: number;
  cliente: string;
  platos: Plato[];

  constructor(id: number, cliente: string, platos: Plato[]) {
    this.id = id;
    this.cliente = cliente;
    this.platos = platos;
  }

  calcularTotal() {
    let totalPrecio: number = 0;
    for (let i = 0; this.platos.length > i; i++) {
      totalPrecio += this.platos[i].precio;
    }
    return totalPrecio;
  }
}

class Restaurante {
  pedidos: Pedido[] = [];

  agregarPedido(pedido: Pedido) {
    this.pedidos.push(pedido);
  }

  totalVentas() {
    let total: number = 0;
    for (let x = 0; this.pedidos.length > x; x++) {
      for (let i = 0; this.pedidos[x].platos.length > i; i++) {
        total += this.pedidos[x].platos[i].precio;
      }
    }
    return total;
  }

  buscarPedidosCliente(nombreCliente: string) {
    let listaPedidos: Pedido[] = [];
    for (let x = 0; this.pedidos.length > x; x++) {
      if (this.pedidos[x].cliente === nombreCliente) {
        listaPedidos.push(this.pedidos[x]);
      }
    }
    return listaPedidos;
  }

  filtrarPedidosPorPrecioTotal(precioTotal: number) {
    let listaPedidos: Pedido[] = [];
    for (let x = 0; this.pedidos.length > x; x++) {
      let total = this.pedidos[x].calcularTotal();
      if (total >= precioTotal) {
        listaPedidos.push(this.pedidos[x]);
      }
    }
    return listaPedidos;
  }
}

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  restaurante = new Restaurante();
  nuevoPedido = { cliente: '', platos: [] as Plato[] };
  buscarCliente = '';
  precioFiltro = 0;
  pedidosFiltrados: Pedido[] = [];

  constructor() {
    this.inicializarDatos();
  }

  inicializarDatos() {
    for (let cliente = 1; cliente <= Math.floor(Math.random() * 10) + 1; cliente++) {
      let platos: Plato[] = [];
      for (let plato = 1; plato <= Math.floor(Math.random() * 10) + 1; plato++) {
        platos.push(new Plato(cliente, `Plato ${plato}`, plato * 2.5));
      }
      this.restaurante.agregarPedido(new Pedido(cliente, `Cliente ${cliente}`, platos));
    }
  }

  agregarPlato() {
    const nuevoPlato = new Plato(this.nuevoPedido.platos.length + 1, '', 0);
    this.nuevoPedido.platos.push(nuevoPlato);
  }

  agregarPedido() {
    const pedido = new Pedido(
      this.restaurante.pedidos.length + 1,
      this.nuevoPedido.cliente,
      this.nuevoPedido.platos.map(plato => new Plato(plato.id, plato.nombre, plato.precio))
    );
    this.restaurante.agregarPedido(pedido);
    this.nuevoPedido = { cliente: '', platos: [] };
  }

  totalVentas() {
    return this.restaurante.totalVentas();
  }

  buscarPedidos() {
    this.pedidosFiltrados = this.restaurante.buscarPedidosCliente(this.buscarCliente);
  }

  filtrarPorPrecio() {
    this.pedidosFiltrados = this.restaurante.filtrarPedidosPorPrecioTotal(this.precioFiltro);
  }
}
