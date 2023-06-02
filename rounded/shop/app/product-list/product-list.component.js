import { rnd } from '../../../rounded.js';

import { HTML } from './product-list.component.html.js';
import { CSS } from './product-list.component.css.js';

import { products } from '../products.js';

const NOTIFY_EVENT = 'product-notify';

export class ProductListComponent extends HTMLElement {
  products = [...products];

  connectedCallback() {
    const base = rnd(HTML.products, ['.products']);
    const list = base.selected['.products'];
    for (const product of this.products) {
      const result = rnd(HTML.product, {
        'linkTitle': product.name + ' details',
        'routerLink': '#/products/' + product.id,
        'productName': product.name,
        'productDescription': product.description,
        'product': encodeURI(JSON.stringify(product)),
        'notify': NOTIFY_EVENT
      }, ['.description', 'button', 'app-product-alerts']);

      if (!product.description) {
        result.selected['.description'].style.display = 'none';
      }
      result.selected['button'].addEventListener('click', this.share.bind(this));
      result.selected['app-product-alerts'].addEventListener(NOTIFY_EVENT, this.onNotify.bind(this));

      list.appendChild(result.element);
    }
    this.append(base.element);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

