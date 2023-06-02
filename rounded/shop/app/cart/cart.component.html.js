const item = `
<div class="cart-item">
  <span>{{ itemName }} </span>
  <span>{{ itemPrice }}</span>
</div>
`;

const cart = `
<h3>Cart</h3>

<p>
  <a href="#/shipping">Shipping Prices</a>
</p>

<div class="items"></div>

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

  <button class="button" type="submit">Purchase</button>

</form>
`;

export const HTML = {item, cart};

