import { rnd } from '../../../rounded.js';
import { CartService, currency } from '../cart.service.js';

import { CSS } from './cart.component.css.js';
import { HTML } from './cart.component.html.js';

export class CartComponent extends HTMLElement {
  list = undefined;
  formName = undefined;
  formAddress = undefined;
  cartService = CartService.instance;

  connectedCallback() {
    const base = rnd(HTML.cart, ['.items', '#name', '#address', '[type="submit"]']);

    this.list = base.selected['.items'];
    this.formName = base.selected['#name'];
    this.formAddress = base.selected['#address'];
    const formSubmit = base.selected['[type="submit"]'];
    formSubmit.addEventListener('click', this.onSubmit.bind(this));

    this.update();
    this.append(base.element);
  }

  update() {
    this.list.innerText = '';
    for (const item of this.cartService.getItems()) {
      const result = rnd(HTML.item, {
        'itemName': item.name,
        'itemPrice': currency(item.price)
      });
      this.list.appendChild(result.element);
    }
  }

  onSubmit() {
    this.cartService.clearCart();
    console.warn('Your order has been submitted ', this.formName.value);
    this.formName.value = '';
    this.formAddress.value = '';
    this.update();
  }
}

