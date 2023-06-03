export const PipeProviders = (() => {
  const providers = {};
  const register = (key, func) => {
    providers[key] = func;
  };
  const get = (key) => {
    return providers[key];
  };
  return Object.freeze({register, get});
})();

function getDataPath(path, data) {
  const parts = path.split('.');
  let result = data;
  for (const part of parts) {
    result = result[part.trim()];
  }
  return result;
}

function process(elements, data) {
  for (const element of elements) {
    if ((element.dataset.showif
         && !getDataPath(element.dataset.showif, data))
    || (element.dataset.hideif
         && getDataPath(element.dataset.hideif, data))) {
      element.remove();
      continue;
    }
    if (element.dataset.attr) {
      const attribs = element.dataset.attr.split(',');
      for (const attrib of attribs) {
        const [attr, path] = attrib.split(':');
        element.setAttribute(attr.trim(), getDataPath(path, data));
      }
    }
    if (element.dataset.text) {
      const pipes = element.dataset.text.split('|');
      let content = getDataPath(pipes.shift(), data);
      for (const pipe of pipes || []) {
        content = PipeProviders.get(pipe.trim())(content);
      }
      element.innerText += `${content}`;
    }
    if (element.dataset.event) {
      const [eventName, path] = element.dataset.event.split('->');
      element.addEventListener(eventName.trim(), getDataPath(path, data));
    }
    if (element.dataset.object) {
      const path = element.dataset.object;
      const name = path.substring(path.lastIndexOf('.') + 1).trim();
      element.setAttribute(name, encodeURI(JSON.stringify(getDataPath(path, data))));
    }
    if (element.dataset.string) {
      const path = element.dataset.string;
      const name = path.substring(path.lastIndexOf('.') + 1).trim();
      element.setAttribute(name, `${getDataPath(path, data)}`);
    }
    if (element.dataset.for) {
      const [key, path] = element.dataset.for.split(' of ');
      const contentArray = getDataPath(path, data);
      delete(element.dataset.for);
      let lastElement = element;
      for (const content of contentArray) {
        const nextElement = element.cloneNode(true);
        const nextData = {...data};
        nextData[key.trim()] = content;
        lastElement.after(nextElement);
        process([...nextElement.children], nextData);
        lastElement = nextElement;
      }
      element.remove();
    } else if (element.children.length) {
      process([...element.children], data);
    }
  }
}

export function rnd(htmlString, data) {
  htmlString = htmlString || '';
  data = data || {};
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  const element = template.content.cloneNode(true);
  process([...element.children], data);
  return element;
}

