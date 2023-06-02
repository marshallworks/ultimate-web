import { rnd } from '../../../rounded.js';
import { CartService, currency } from '../cart.service.js';

import { CSS } from './shipping.component.css.js';
import { HTML } from './shipping.component.html.js';

export class ShippingComponent extends HTMLElement {
  cartService = CartService.instance;
  shippingCosts = undefined;
  list = undefined;

  connectedCallback() {
    const base = rnd(HTML.list, ['.shipping-list']);
    this.list = base.selected['.shipping-list'];
    this.update();
    this.append(base.element);
  }

  async update() {
    if (!this.shippingCosts) {
      this.shippingCosts = await this.cartService.getShippingPrices();
    }
    this.list.innerText = '';
    for (const shipping of this.shippingCosts) {
      const result = rnd(HTML.item, {
        'shippingType': shipping.type,
        'shippingPrice': currency(shipping.price)
      });
      this.list.append(result.element);
    }
  }
}

