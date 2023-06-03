export const RoundedRouterService = (() => {
  let _defaultComponent = '';
  let _ids = {};
  let _routes = [];

  const setDefaultComponent = (component) => {
    _defaultComponent = component;
  };

  const setRoutes = (routes) => {
    _routes = routes;
  };

  const getComponent = (path) => {
    const pathParts = path.split('/');
    for (const route of _routes) {
      const routeParts = route.path.split('/');
      if (pathParts[0] === routeParts[0]) {
        if (pathParts[1] && routeParts[1]) {
          _ids[routeParts[1].replace(':', '')] = Number(pathParts[1]);
        } else {
          _ids = {};
        }
        return route.component;
      }
    }
    return _defaultComponent;
  };

  const getId = (key) => _ids[key];

  return Object.freeze({setDefaultComponent, setRoutes, getComponent, getId});
})();

export class RoundedRouter extends HTMLElement {
  last = null;

  connectedCallback() {
    window.addEventListener('hashchange', (event) => {
      const path = event.currentTarget.location.hash.replace('#/', '').replace('#', '');
      this.onNav(path);
    });
    this.onNav('');
  }

  onNav(path) {
    if (this.last) this.last.remove();
    const component = RoundedRouterService.getComponent(path);
    this.last = document.createElement(component);
    this.after(this.last);
  }
}

