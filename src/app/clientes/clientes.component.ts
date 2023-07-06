import { Component } from '@angular/core';
import { Clientes } from './clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})


export class ClientesComponent {
  clientes: Clientes[] = [
    {id:'1', nombre:'Lucas',direccion:'Santiago de Surco', correo:'cliente1@gmail.com', telefono:'2345671'},
    {id:'2', nombre:'Mario', direccion:'Santiago de Surco', correo:'cliente2@gmail.com', telefono:'2345671'},
    {id:'3', nombre:'Dennis', direccion:'La Molina', correo:'cliente3@gmail.com', telefono:'2345671'},
    {id:'4', nombre:'Mery', direccion:'Mirfalores', correo:'cliente4@gmail.com', telefono:'2345671'},
    {id:'5', nombre:'José', direccion:'Barranco', correo:'cliente5@gmail.com', telefono:'2345671'},
    {id:'6', nombre:'Sarah', direccion:'Cercado de Lima', correo:'cliente6@gmail.com', telefono:'2345671'},
    {id:'7', nombre:'Karen', direccion:'Santiago de Surco', correo:'cliente7@gmail.com', telefono:'2345671'},
    {id:'7', nombre:'Ricardo', direccion:'San Luis', correo:'cliente8@gmail.com', telefono:'2345671'},
  ];
}
