import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

class Cliente {
  id: number;
  nombre: string;
  saldo: number;

  constructor(id: number, nombre: string, saldo: number) {
    this.id = id;
    this.nombre = nombre;
    this.saldo = saldo;
  }

  realizarDeposito(cantidad: number) {
    this.saldo += cantidad;
  }

  realizarRetiro(cantidad: number) {
    if (this.saldo >= cantidad) {
      this.saldo -= cantidad;
    } else {
      console.log('Fondos insuficientes');
    }
  }

  estadoCliente(): string {
    return `Cliente: ${this.nombre},  saldo: ${this.saldo}€`;
  }
}

class Banco {
  clientes: Cliente[] = [];

  agregarCliente(nombre: string, saldo: number) {
    const id = this.clientes.length + 1;
    const nuevoCliente = new Cliente(id, nombre, saldo);
    this.clientes.push(nuevoCliente);
  }

  buscarCliente(id: number): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }

  calcularSaldoTotal(): number {
    return this.clientes.reduce((total, cliente) => total + cliente.saldo, 0);
  }
}

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component {
  mensaje: string = '';
  banco: Banco = new Banco();
  nuevoClienteNombre: string = '';
  nuevoClienteSaldo: number = 0;
  clienteId: number = 0;
  cantidad: number = 0;

  ngOnInit() {
    this.simularOperaciones();
    console.log(this.banco.clientes)
  }

  agregarCliente() {
    this.banco.agregarCliente(this.nuevoClienteNombre, this.nuevoClienteSaldo);
    this.nuevoClienteNombre = '';
    this.nuevoClienteSaldo = 0;
  }

  realizarDeposito() {
    const cliente = this.banco.buscarCliente(this.clienteId);
    if (cliente) {
      cliente.realizarDeposito(this.cantidad);
    }
    this.clienteId = 0;
    this.cantidad = 0;
  }

  realizarRetiro() {
    const cliente = this.banco.buscarCliente(this.clienteId);
    if (cliente) {
      cliente.realizarRetiro(this.cantidad);
    }
    this.clienteId = 0;
    this.cantidad = 0;
  }

  simularOperaciones() {
    this.banco.agregarCliente('Ana', 500);
    this.banco.agregarCliente('Luis', 300);
    this.banco.agregarCliente('Maria', 700);

    const cliente1 = this.banco.buscarCliente(1);
    if (cliente1) {
      cliente1.realizarDeposito(200);
      cliente1.realizarRetiro(100);
      console.log(cliente1.estadoCliente());
    }

    const cliente2 = this.banco.buscarCliente(2);
    if (cliente2) {
      cliente2.realizarRetiro(400);
      console.log(cliente2.estadoCliente());
    }

    console.log('Saldo total del banco:', this.banco.calcularSaldoTotal());
  }
}
