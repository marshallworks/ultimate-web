import { div } from '/ignore/ignore.js';

export const Display = () => {
  const valueDiv = div('0');

  const update = (nextValue) => {
    valueDiv.innerText = nextValue;
  };

  const render = (value) => {
    return div({class: 'component-display'}, [
      valueDiv
    ]);
  };

  return Object.freeze({update, render})
};

