export const HTML = `
<h2>Products</h2>

<div data-for="product of products">

  <h3>
    <a
      data-attr="title:product.linkTitle, href:product.link"
      data-text="product.name">
    </a>
  </h3>

  <p data-showif="product.description"
     data-text="product.description"
  >Description: </p>

  <button type="button" data-event="click->share">
    Share
  </button>

  <app-product-alerts
    data-object="product"
    data-string="notify"
  ></app-product-alerts>

</div>
`;

