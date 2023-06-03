export function currency(amount) {
  return `$${amount.toFixed(2)}`;
}

export const CartService = (() => {
  let _items = [];

  const addToCart = (product) => _items.push(product);

  const getItems = () => _items;

  const clearCart = () => {
    _items = [];
    return _items;
  }

  const getShippingPrices = () => {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.onload = (e) => {
        resolve(JSON.parse(req.response));
      };
      req.open('GET', './assets/shipping.json');
      req.send();
    });
  }

  return Object.freeze({addToCart, getItems, clearCart, getShippingPrices});
})();

