export function currency(amount) {
  return `$${amount.toFixed(2)}`;
}

export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.onload = (e) => {
        resolve(JSON.parse(req.response));
      };
      req.open('GET', './assets/shipping.json');
      req.send();
    });
  }

  static #isInternal = false;
  static #instance;

  static get instance() {
    if (!CartService.#instance) {
      CartService.#isInternal = true;
      CartService.#instance = new this();
    }
    return CartService.#instance;
  }

  constructor() {
    if (!CartService.#isInternal) {
      throw new TypeError('CartService is a singleton, use CartService.instance.');
    }
    CartService.#isInternal = false;
  }
}

