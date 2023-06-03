import { RoundedRouterService, RoundedRouter } from '../../router.js';
import { PipeProviders } from '../../rounded.js';
import { currency } from './cart.service.js';
import { AppComponent } from './app.component.js';
import { TopBarComponent } from './top-bar/top-bar.component.js';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component.js';
import { ProductListComponent } from './product-list/product-list.component.js';
import { ProductDetailsComponent } from './product-details/product-details.component.js';
import { CartComponent } from './cart/cart.component.js';
import { ShippingComponent } from './shipping/shipping.component.js';

export const bootstrap = () => {
  PipeProviders.register('currency', currency);

  RoundedRouterService.setDefaultComponent('app-product-list');
  RoundedRouterService.setRoutes([
    {path: '', component: 'app-product-list'},
    {path: 'products/:productId', component: 'app-product-details'},
    {path: 'cart', component: 'app-cart'},
    {path: 'shipping', component: 'app-shipping'},
  ]);

  customElements.define('app-root', AppComponent);
  customElements.define('app-top-bar', TopBarComponent);
  customElements.define('app-product-alerts', ProductAlertsComponent);
  customElements.define('app-product-list', ProductListComponent);
  customElements.define('app-product-details', ProductDetailsComponent);
  customElements.define('app-cart', CartComponent);
  customElements.define('app-shipping', ShippingComponent);
  customElements.define('router-outlet', RoundedRouter);
};

