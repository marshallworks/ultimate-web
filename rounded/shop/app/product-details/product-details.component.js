import { rnd } from '../../../rounded.js';
import { products } from '../products.js';
import { RoundedRouterService } from '../../../router.js';
import { CartService } from '../cart.service.js';

import { CSS } from './product-details.component.css.js';
import { HTML } from './product-details.component.html.js';

export class ProductDetailsComponent extends HTMLElement {
  product = undefined

  connectedCallback() {
    const productIdFromRoute = RoundedRouterService.getId('productId');
    this.product = products.find(product => product.id === productIdFromRoute);

    const element = rnd(HTML, {
      'product': this.product,
      'addToCart': this.addToCart.bind(this)
    });

    this.append(element);
  }

  addToCart() {
    CartService.addToCart(this.product);
    window.alert('Your product has been added to the cart!');
  }
}

