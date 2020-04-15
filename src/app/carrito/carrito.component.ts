import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter <{name: string, price: number, quantity: number}>();

  removeProduct(nameIn: string, priceIn: number, quantityIn: number) {
    this.productRemoved.emit({name: nameIn, price: priceIn, quantity: quantityIn});
  }
}
