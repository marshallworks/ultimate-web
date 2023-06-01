import { div } from '../../ignore.js';
import { calculate } from '../logic/calculate.js';
import { Display } from './Display.js';
import { ButtonPanel } from './ButtonPanel.js';

export const App = () => {
  let state = {
    total: null,
    next: null,
    operation: null
  };

  const display = Display();

  const updateDisplay = () => {
    display.update(state.next || state.total || '0');
  };

  const handleClick = (buttonName) => {
    const next = calculate(state, buttonName);
    for (const [key, value] of Object.entries(next)) {
      state[key] = value;
    }
    updateDisplay();
  };

  const buttonPanel = ButtonPanel({clickHandler: handleClick});

  const render = () => {
    return div({class: 'component-app'}, [
      display.render(),
      buttonPanel.render()
    ]);
  };

  return Object.freeze({render});
};

