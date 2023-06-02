const product = `
<div>

  <h3>
    <a
      title="{{ linkTitle }}"
      href="{{ routerLink }}">
      {{ productName }}
    </a>
  </h3>

  <p class="description">
    Description: {{ productDescription }}
  </p>

  <button type="button">
    Share
  </button>

  <app-product-alerts
    product="{{ product }}"
    notify="{{ notify }}"
  ></app-product-alerts>

</div>
`;

const products = `
<h2>Products</h2>
<div class="products"></div>
`;

export const HTML = {product, products};

