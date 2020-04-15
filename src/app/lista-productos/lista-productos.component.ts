import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter <{name: string, price: number, quantity: number}>();
  correo: string;


  addProductToCart(nameIn: string, priceIn: number, quantityIn: number, i: number) {
    this.productAdded.emit({name: nameIn, price: priceIn, quantity: quantityIn});
  }
}
