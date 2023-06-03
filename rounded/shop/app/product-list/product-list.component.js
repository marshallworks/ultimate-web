import { rnd } from '../../../rounded.js';

import { HTML } from './product-list.component.html.js';
import { CSS } from './product-list.component.css.js';

import { products } from '../products.js';

const NOTIFY_EVENT = 'product-notify';

export class ProductListComponent extends HTMLElement {

  connectedCallback() {
    const productsWithLinks = [];
    for (const product of products) {
      productsWithLinks.push({
        ...product,
        link: `#/products/${product.id}`,
        linkTitle: `${product.name} details`
      });
    }

    const element = rnd(HTML, {
      'products': productsWithLinks,
      'notify': NOTIFY_EVENT,
      'share': this.share.bind(this)
    });

    this.addEventListener(NOTIFY_EVENT, this.onNotify.bind(this));
    this.append(element);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

