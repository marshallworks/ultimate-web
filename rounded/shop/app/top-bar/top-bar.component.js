import { rnd } from '../../../rounded.js';

import { CSS } from './top-bar.component.css.js';
import { HTML } from './top-bar.component.html.js';

export class TopBarComponent extends HTMLElement {

  connectedCallback() {
    const base = rnd(HTML);
    this.append(base.element);
  }
}

