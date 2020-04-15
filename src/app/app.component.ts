import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Evaluacion1';
  quantityStoredProducts: number;

  storedProducts = [{name: 'Vino', price: 100, quantity: 2},
    {name: 'Vodka', price: 200, quantity: 1},
    {name: 'Cerveza', price: 300, quantity: 1},
    {name: 'Pisco', price: 250, quantity: 1},
    {name: 'Tequila', price: 150, quantity: 1}
  ];

  cartStoredProducts = [];

  addProductToCart(event) {
    this.storedProducts.splice(this.storedProducts.findIndex(obj => obj.name === event.name), 1);
    this.storedProducts.push({name: event.name, price: event.price, quantity: event.quantity - 1});
    if (this.cartStoredProducts.findIndex(obj => obj.name === event.name) === -1) {
      event.quantity = 1;
      this.cartStoredProducts.push(event);
    } else {
      event.quantity = this.cartStoredProducts[this.cartStoredProducts.findIndex(obj => obj.name === event.name)].quantity + 1;
      console.log(event.quantity);
      this.cartStoredProducts.splice(this.cartStoredProducts.findIndex(obj => obj.name === event.name), 1);
      this.cartStoredProducts.push(event);
    }
  }

  removeProduct(event) {
    if (this.cartStoredProducts[this.cartStoredProducts.findIndex(obj => obj.name === event.name)].quantity === 1) {
      this.cartStoredProducts.splice(this.cartStoredProducts.findIndex(obj => obj.name === event.name), 1);
    } else {
      this.cartStoredProducts.splice(this.cartStoredProducts.findIndex(obj => obj.name === event.name), 1);
      event.quantity = event.quantity - 1;
      this.cartStoredProducts.push(event);
    }
    event.quantity = this.storedProducts[this.storedProducts.findIndex(obj => obj.name === event.name)].quantity + 1;
    this.storedProducts.splice(this.storedProducts.findIndex(obj => obj.name === event.name), 1);
    this.storedProducts.push(event);
  }
}
