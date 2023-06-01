/**
 * @typedef HTMLAttributes
 * @type {Object}
 * @property {string} [id]
 * @property {string} [class]
 * @property {string} [style]
 */

/**
 * @param {string} tag
 * @param {HTMLAttributes} attribs
 * @param {string} textContent
 * @param {HTMLElement[]} children
 * @returns {HTMLElement} The resulting element.
 */
const elementCreate = (tag, attribs, textContent, children) => {
  const element = document.createElement(tag);
  for (const [attrib, value] of Object.entries(attribs)) {
    if (typeof value === 'object') {
      for (const [prop, inner] of Object.entries(value)) {
        element[attrib][prop] = inner;
      }
    } else {
      element.setAttribute(attrib, value);
    }
  }
  if (textContent) element.innerText = textContent;
  for (const child of children) {
    element.appendChild(child);
  }
  return element;
};

const createElementFunc = (tag) => {
  return (...args) => {
    let attribs = {};
    let textContent = '';
    let children = [];
    for (const arg of args) {
      if (Array.isArray(arg)) {
        children = arg;
      } else if (typeof arg === 'object') {
        attribs = arg;
      } else {
        textContent = `${arg}`;
      }
    }
    return elementCreate(tag, attribs, textContent, children);
  };
 };

export const div = createElementFunc('div');
export const button = createElementFunc('button');

