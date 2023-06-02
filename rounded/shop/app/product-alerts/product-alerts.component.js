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
    const base = rnd(HTML, ['button']);
    base.selected['button'].addEventListener('click', this.onNotify.bind(this));
    this.update();
    this.append(base.element);
  }

  update() {
    this.notify = this.getAttribute('notify');
    this.product = this.getAttribute('product')
        ? JSON.parse(decodeURI(this.getAttribute('product')))
        : null ;
    this.style.display = this.product && this.product.price > 700 ? 'block' : 'none';
  }

  onNotify() {
    this.dispatchEvent(new CustomEvent(this.notify, {bubbles: true}));
  }
}

