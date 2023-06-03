export const HTML = `
<h3>Cart</h3>

<p>
  <a href="#/shipping">Shipping Prices</a>
</p>

<div class="cart-item" data-for="item of items">
  <span data-text="item.name"></span>
  <span data-text="item.price | currency"></span>
</div>

<form>

  <div>
    <label for="name">
      Name
    </label>
    <input id="name" type="text">
  </div>

  <div>
    <label for="address">
      Address
    </label>
    <input id="address" type="text">
  </div>

  <button class="button" data-event="click->onSubmit">Purchase</button>

</form>
`;

