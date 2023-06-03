import { rnd } from '../../../rounded.js';

import { CSS } from './product-alerts.component.css.js';
import { HTML } from './product-alerts.component.html.js';

export class ProductAlertsComponent extends HTMLElement {
  product = null;
  notify = null;

  static get observableAttributes() { return ['product', 'notify'] }

  attributeChangedCallback(name, oldValue, newValue) {
    this.update();
  }

  connectedCallback() {
    this.update();
  }

  update() {
    this.innerText = '';
    this.notify = this.getAttribute('notify');
    this.product = this.getAttribute('product')
        ? JSON.parse(decodeURI(this.getAttribute('product')))
        : null ;
    const element = rnd(HTML, {
      'priceGreaterThan700': this.product && this.product.price > 700,
      'onNotify': this.onNotify.bind(this)
    });
    this.append(element);
  }

  onNotify() {
    this.dispatchEvent(new CustomEvent(this.notify, {bubbles: true}));
  }
}

