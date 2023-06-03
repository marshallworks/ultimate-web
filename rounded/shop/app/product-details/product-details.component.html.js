export const HTML = `
<h2>Product Details</h2>

<div data-showif="product">
  <h3 data-text="product.name"></h3>
  <h4 data-text="product.price | currency"></h4>
  <p data-text="product.description"></p>
  <button type="button" data-event="click->addToCart">Buy</button>
</div>
`;
