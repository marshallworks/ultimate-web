import { rnd } from '../../rounded.js';

import { CSS } from './app.component.css.js';
import { HTML } from './app.component.html.js';

export class AppComponent extends HTMLElement {

  connectedCallback() {
    this.append(rnd(HTML));
  }
}

