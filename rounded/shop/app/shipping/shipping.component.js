import { rnd } from '../../../rounded.js';
import { CartService } from '../cart.service.js';

import { CSS } from './shipping.component.css.js';
import { HTML } from './shipping.component.html.js';

export class ShippingComponent extends HTMLElement {
  shippingCosts = undefined;

  connectedCallback() {
    this.update();
  }

  async update() {
    if (!this.shippingCosts) {
      this.shippingCosts = await CartService.getShippingPrices();
    }
    this.innerText = '';
    const element = rnd(HTML, {
      'shippingCosts': this.shippingCosts
    });
    this.append(element);
  }
}

