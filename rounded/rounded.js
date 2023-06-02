export function rnd(...args) {
  let text = '';
  let selectors = [];
  let vars = {};
  for (const arg of args) {
    if (Array.isArray(arg)) {
      selectors = arg;
    } else if (typeof arg === 'object') {
      vars = arg;
    } else {
      text = `${arg}`;
    }
  }
  for (const [varName, content] of Object.entries(vars)) {
    text = text.replaceAll(`{{ ${varName} }}`, content);
  }
  const template = document.createElement('template');
  template.innerHTML = text;
  const element = template.content.cloneNode(true);
  const selected = {};
  for (const selector of selectors) {
    const result = element.querySelectorAll(selector);
    if (result.length === 0) {
      selected[selector] = null;
    } else if (result.length === 1) {
      selected[selector] = result[0];
    } else {
      selected[selector] = result;
    }
  }
  return {element, selected};
}

export class RoundedRouterService {
  #defaultComponent = '';
  #ids = {};
  #routes = [];

  setDefaultComponent(component) {
    this.#defaultComponent = component;
  }

  setRoutes(routes) {
    this.#routes = routes;
  }

  getComponent(path) {
    const pathParts = path.split('/');
    for (const route of this.#routes) {
      const routeParts = route.path.split('/');
      if (pathParts[0] === routeParts[0]) {
        if (pathParts[1] && routeParts[1]) {
          this.#ids[routeParts[1].replace(':', '')] = Number(pathParts[1]);
        } else {
          this.#ids = {};
        }
        return route.component;
      }
    }
    return this.#defaultComponent;
  }

  getId(key) {
    return this.#ids[key];
  }

  static #isInternal = false;
  static #instance;

  static get instance() {
    if (!RoundedRouterService.#instance) {
      RoundedRouterService.#isInternal = true;
      RoundedRouterService.#instance = new this();
    }
    return RoundedRouterService.#instance;
  }

  constructor() {
    if (!RoundedRouterService.#isInternal) {
      throw new TypeError('RoundedRouterService is a singleton, use RoundedRouterService.instance.');
    }
    RoundedRouterService.#isInternal = false;
  }
}

export class RoundedRouter extends HTMLElement {
  last = null;
  router = RoundedRouterService.instance;

  connectedCallback() {
    window.addEventListener('hashchange', (event) => {
      const path = event.currentTarget.location.hash.replace('#/', '').replace('#', '');
      this.onNav(path);
    });
    this.onNav('');
  }

  onNav(path) {
    if (this.last) this.last.remove();
    const component = this.router.getComponent(path);
    this.last = document.createElement(component);
    this.after(this.last);
  }
}

