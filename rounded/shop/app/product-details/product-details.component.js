import { rnd, RoundedRouterService } from '../../../rounded.js';
import { products } from '../products.js';
import { CartService, currency } from '../cart.service.js';

import { CSS } from './product-details.component.css.js';
import { HTML } from './product-details.component.html.js';

export class ProductDetailsComponent extends HTMLElement {
  router = RoundedRouterService.instance;
  cartService = CartService.instance;
  product = undefined

  connectedCallback() {
    const productIdFromRoute = this.router.getId('productId');
    this.product = products.find(product => product.id === productIdFromRoute);

    const base = rnd(HTML, {
      'productName': this.product.name,
      'productPrice': currency(this.product.price),
      'productDescription': this.product.description
    }, ['.product', 'button']);

    base.selected['.product'].visibility = this.product ? 'visible' : 'hidden';
    base.selected['button'].addEventListener('click', this.addToCart.bind(this));
    this.append(base.element);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    window.alert('Your product has been added to the cart!');
  }
}

