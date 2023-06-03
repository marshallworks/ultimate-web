import { rnd } from '../../../rounded.js';
import { CartService } from '../cart.service.js';

import { CSS } from './cart.component.css.js';
import { HTML } from './cart.component.html.js';

export class CartComponent extends HTMLElement {
  formName = undefined;
  formAddress = undefined;

  connectedCallback() {
    this.update();
  }

  update() {
    this.innerText = '';
    const element = rnd(HTML, {
      'items': CartService.getItems(),
      'onSubmit': this.onSubmit.bind(this)
    });

    this.formName = element.querySelector('#name');
    this.formAddress = element.querySelector('#address');

    this.append(element);
  }

  onSubmit() {
    CartService.clearCart();
    console.warn('Your order has been submitted ', this.formName.value, this.formAddress.value);
    this.formName.value = '';
    this.formAddress.value = '';
    this.update();
  }
}

